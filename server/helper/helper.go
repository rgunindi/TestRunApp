package helper

import (
	"archive/zip"
	"io"
	"os"
	"path/filepath"
)

func MyUnzip(path string, fname string) {
	dst := path
	fpath := path + fname
	archive, _ := zip.OpenReader(fpath)
	defer archive.Close()

	for _, file := range archive.File {
		filePath := filepath.Join(dst, file.Name)

		if file.FileInfo().IsDir() {
			os.MkdirAll(filePath, file.Mode())
		} else {
			os.MkdirAll(filepath.Dir(filePath), file.Mode())
			f, _ := os.OpenFile(filePath, os.O_WRONLY|os.O_CREATE|os.O_TRUNC, file.Mode())
			defer f.Close()
			rc, _ := file.Open()
			defer rc.Close()
			io.Copy(f, rc)
		}
	}
	defer os.Remove(fpath)
	//remove file
}
