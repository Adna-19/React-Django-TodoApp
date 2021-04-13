from django.contrib import admin
from django.urls import path
from todo import views
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', TemplateView.as_view(template_name="index.html")),
    path('api/overview', views.api_overview),
    path('api/task-list/', views.task_list),
    path('api/task-add/', views.add_task),
    path('api/task-update/<int:id>/', views.update_task),
    path('api/task-delete/<int:id>/', views.delete_task)
]
