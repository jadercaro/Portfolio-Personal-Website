from django.core.management.base import BaseCommand
from portafolio.models import Project

class Command(BaseCommand):
    help = 'Update image paths from media to static'

    def handle(self, *args, **kwargs):
        for project in Project.objects.all():
            if 'media/' in project.url:
                project.url = project.url.replace('media/', '')
                project.save()
                self.stdout.write(self.style.SUCCESS(f'Successfully updated image path for project {project.title}'))