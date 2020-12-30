from rest_framework import serializers
from .models import Category, CategoryType, Income, Expense, BudgetItem

class CategorySerializer(serializers.ModelSerializer):
  class Meta:
    model = Category
    fields = '__all__'

class CategoryTypeSerializer(serializers.ModelSerializer):
  class Meta:
    model = Category
    fields = '__all__'

class IncomeSerializer(serializers.ModelSerializer):
  class Meta:
    model = Income
    fields = '__all__'

class ExpenseSerializer(serializers.ModelSerializer):
  class Meta:
    model = Expense
    fields = ['id', 'amount', 'category', 'date', 'description']

class BudgetItemSerializer(serializers.ModelSerializer):
  time_period = serializers.DateField(format='%m/%Y')

  class Meta:
    model = BudgetItem
    fields = '__all__'