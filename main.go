package main

import (
	"fmt"
	"log"
	"net/http"
	"os"
	"path"
	"strings"

	"github.com/invopop/ctxi18n"
	_ "github.com/joho/godotenv/autoload"
	"github.com/lionpuro/portfolio/locales"
	"github.com/lionpuro/portfolio/views"
	"golang.org/x/text/language"
)

func main() {
	port := os.Getenv("PORT")
	if err := ctxi18n.Load(locales.Content); err != nil {
		log.Fatalf("error loading locales: %v", err)
	}
	mux := http.NewServeMux()

	submux := http.NewServeMux()
	submux.HandleFunc("GET /", indexHandler)

	mux.Handle("GET /static/", http.StripPrefix("/static", http.FileServer(http.Dir("static"))))
	mux.HandleFunc("/", languageMiddleware(submux))

	server := &http.Server{
		Addr:    fmt.Sprintf(":%s", port),
		Handler: gzipHandler(mux),
	}

	fmt.Printf("Listening on port %s\n", port)
	log.Fatal(server.ListenAndServe())
}

func indexHandler(w http.ResponseWriter, r *http.Request) {
	views.FullPage(views.Home(), "Lion Puro", "A full-stack web-developer").Render(r.Context(), w)
}

func detectLanguage(r *http.Request) string {
	lang := "en"
	accept := r.Header.Get("Accept-Language")
	matcher := language.NewMatcher([]language.Tag{
		language.English, // fallback
		language.Finnish,
	})
	tag, _ := language.MatchStrings(matcher, accept)
	b, _ := tag.Base()

	if b.String() == "fi" {
		lang = "fi"
	}
	return lang
}

func languageMiddleware(next http.Handler) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		pathSegments := strings.Split(r.URL.Path, "/")
		langParam := pathSegments[1]
		lang := detectLanguage(r)

		if lang == "fi" && langParam == "" {
			url := path.Join("/", "fi")
			http.Redirect(w, r, url, http.StatusFound)
			return
		}

		if langParam == "fi" || langParam == "en" {
			lang = langParam
		}

		ctx, err := ctxi18n.WithLocale(r.Context(), lang)
		if err != nil {
			log.Printf("error setting locale: %v", err)
			http.Error(w, "error setting locale", http.StatusBadRequest)
			return
		}
		next.ServeHTTP(w, r.WithContext(ctx))
	}
}
