var gulp = require('gulp');
var browserSync = require('browser-sync').create();

//Tarea Nombre de la tares y funcion
gulp.task('test-gulp', function() {
	console.log("..........Hola gulp!...........");
});

gulp.task('browserSync', () => {
	browserSync.init({
		server:{
			baseDir:''
		}
	})
});


//Tareas con dependencias
gulp.task('dev',['browserSync'], ()=>{

	gulp.watch('index.html',browserSync.reload);

});

gulp.task('default',['test-gulp','browserSync']);


/*gulp.task('test-gulp', () => {
	console.log("..........Hola gulp!...........");
});*/