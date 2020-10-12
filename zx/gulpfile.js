var gulp=require("gulp");
var cssmin=require("gulp-cssmin");
var uglify=require("gulp-uglify");
const babel = require('gulp-babel');
const nokey = require('gulp-tinypng-nokey');

gulp.task("perfect",()=>{
	gulp.src("src/*/*.css")
	.pipe(cssmin())
	.pipe(gulp.dest("./dist"))
	
	gulp.src("src/*/*.js")
	.pipe(babel())
	.pipe(uglify())
	.pipe(gulp.dest("./dist"))
	
	gulp.src("src/*/*.{png,jpg,jpeg,gif,ico}")
	.pipe(nokey())
	.pipe(gulp.dest("./dist"))
	
	gulp.src("src/*/*.html")
	.pipe(gulp.dest("./dist"))
})


//gulp.task("dance",()=>{
//	console.log("正在跳舞...");
//})

//gulp.task("default",()=>{
//	console.log("正在默认...");
//})

//gulp.task("copyCss",()=>{
//	gulp.src("./src/*/*.css")
//	.pipe(cssmin())
//	.pipe(rename({suffix: '.min'}))
//	.pipe(gulp.dest("./dist"))
//})

//gulp.task("copyCss",()=>{
//	gulp.src("./src/*/*.css")
//	.pipe(concat("dy.css"))
//	.pipe(gulp.dest("./dist"))
//})

//gulp.task("copyjs",()=>{
//	gulp.src("./src/*/*.js")
//	.pipe(uglify())
//	.pipe(gulp.dest("./dist"))
//})

//gulp.task("babeljs",()=>{
//	gulp.src("./src/*/*.js")
//	.pipe(babel())
//	.pipe(uglify())
//	.pipe(gulp.dest("./dist"))
//})

//gulp.task("imgmin",()=>{
//	gulp.src("./src/*/*.{png,jpg,jpeg,gif,ico}")
//	.pipe(nokey())
//	.pipe(gulp.dest("./dist"))
//})




//最终目的，完美的gulp代码，可以以后反复使用