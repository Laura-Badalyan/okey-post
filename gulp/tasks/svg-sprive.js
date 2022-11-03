import svgSprite from "gulp-svg-sprite";
export const svgSpriteTask = () => {

	const config = {
    mode: {
      css: { // Activate the «css» mode
        render: {
          css: true // Activate CSS output (with default options)
        }
      }
    }
	};
	
	return app.gulp.src(`${app.path.src.svgicons}`, {})
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: "SVG",
				message: "Error: <%= error.message %>"
			}))
		)
		.pipe(svgSprite({
			mode: {
				stack: {
					sprite: `../icons/icons.svg`,
					// Создавать страницу с перечнем иконок
					example: true
				},
				css: { // Activate the «css» mode
					render: {
						css: true // Activate CSS output (with default options)
					}
				}
			},
		}
		))
		.pipe(app.gulp.dest(`${app.path.build.images}`));
}