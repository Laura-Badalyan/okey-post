// Получаем имя папки проекта
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`; // Также можно использовать rootFolder
const srcFolder = `./src`;

export const path = {
	build: {
		js: `${buildFolder}/js/`,
		css: `${buildFolder}/css/`,
		html: `${buildFolder}/`,
		images: `${buildFolder}/img/`,
		fonts: `${buildFolder}/fonts/`,
		files: `${buildFolder}`
	},
	src: {
		js: `${srcFolder}/**/*.js`,
		images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
		svg: `${srcFolder}/img/**/*.svg`,
		scss: `${srcFolder}/scss/style.scss`,
		html: `${srcFolder}/*.pug`, //.pug
		svgicons: `${srcFolder}/img/svgicons/*.svg`,
		files: `${srcFolder}/`

	},
	watch: {
		js: `${srcFolder}/**/*.js`,
		scss: `${srcFolder}/**/*.scss`,
		html: `${srcFolder}/**/*.pug`, //.pug
		images: `${srcFolder}/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`,
		files: `${srcFolder}`
	},
	clean: buildFolder,
	buildFolder: buildFolder,
	srcFolder: srcFolder,
	rootFolder: rootFolder,
	ftp: ``
}