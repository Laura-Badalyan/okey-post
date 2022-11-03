import webpack from "webpack-stream";
import glob from 'glob'
import path from 'path'

export const js = () => {
	const entries = glob.sync('./src/js/*.js').reduce((entries, entry) => {
		const entryName = path.parse(entry).name
		entries[entryName] = entry
	
		return entries
	}, {});
	return app.gulp.src(app.path.src.js, { sourcemaps: app.isDev })
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: "JS",
				message: "Error: <%= error.message %>"
			}))
		)
		.pipe(webpack({
			mode: app.isBuild ? 'production' : 'development',
			entry: entries,
			// entry: {
			// 	app: './src/js/app.js',
			// 	main: './src/js/main.js',
			//   },
			output: {
				filename: '[name].js',
			}
		}))
		.pipe(app.gulp.dest(app.path.build.js))
		.pipe(app.plugins.browsersync.stream());
}