from django.shortcuts import render

# Create your views here.
def home(request):
	return render(request, "home.html", {
		"sheet": "/static/style.css",
	})
	
def play(request):
	return render(request, "play.html", {
		"sheet": "/static/play.css",
	})