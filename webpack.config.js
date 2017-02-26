var htmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');//methods of Nodejs
module.exports = {
	entry:'./src/app.js',
	output:{
		path:'./dist',
		filename:'js/[name].bundle.js'
	},
	module:{
		rules:[
			{
				test:/\.js$/,
				loader:'babel-loader',
				exclude:path.resolve(__dirname,'node_modules'),
				//排除的范围 node_path方法
				include:path.resolve(__dirname,'src'),//引用范围
				query:{
					presets:['latest']
				}
			},
			{
				test:/\.css$/,
				loader:'style-loader!css-loader!postcss-loader'
				//	↓ postcss 于同目录下配置postcss.config.js文件	↓
// module.exports = {
//   plugins: [
//     require('autoprefixer')({ browsers:["last 5 versions"] })
//   ]
// }
			}
		]
	},
	plugins:[
		new htmlWebpackPlugin({
			filename:'index.html',
			template:'index.html',
			inject:'body'
		})
	]
}