from django.db import models

class Category(models.Model):
  name = models.CharField(max_length=200)
  cat_type = models.IntegerField(default=0)

class Income(models.Model):
  amount = models.IntegerField(default=0)
  category = models.ForeignKey(Category, on_delete=models.CASCADE)
  date = models.DateField()
  description = models.TextField()

class Expense(models.Model):
  amount = models.IntegerField(default=0)
  category = models.ForeignKey(Category, on_delete=models.CASCADE)
  date = models.DateField()
  description = models.TextField()

class BudgetItem(models.Model):
  amount = models.IntegerField(default=0)
  category = models.ForeignKey(Category, on_delete=models.CASCADE)
  time_period = models.DateField() # Month/year this budget amount is for
  description = models.TextField()
