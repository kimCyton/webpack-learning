var htmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path'); //methods of Nodejs
module.exports = {
	entry: './src/app.js',
	output: {
		path: './dist',
		filename: 'js/[name].bundle.js'
	},
	module: {
		rules: [{
			test: /\.js$/,
			loader: 'babel-loader',
			exclude: path.resolve(__dirname, 'node_modules'),
			//排除的范围 node_path方法
			include: path.resolve(__dirname, 'src'), //引用范围
			query: {
				presets: ['latest']
			}
		}, {
			test: /\.css$/,
			loader: 'style-loader!css-loader!postcss-loader'
				//	↓ postcss 于同目录下配置postcss.config.js文件	↓
				// module.exports = {
				//   plugins: [
				//     require('autoprefixer')({ browsers:["last 5 versions"] })
				//   ]
				// }
		}, {
			test: /\.scss$/,
			use: [{
				loader: "style-loader" // creates style nodes from JS strings
			}, {
				loader: "css-loader" // translates CSS into CommonJS
			}, {
				loader: "postcss-loader"
			}, {
				loader: "sass-loader" // compiles Sass to CSS
			}]
		},{
			test:/\.(png|jpg|gif|svg)$/i,
			loader:'url-loader',
			query:{
				limit:20000,
				name:'assets/[name]-[hash:5].[ext]'
			}
		}]
	},
	plugins: [
		new htmlWebpackPlugin({
			filename: 'index.html',
			template: 'index.html',
			inject: 'body'
		})
	]
}