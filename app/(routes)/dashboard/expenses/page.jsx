"use client"
import React, { useEffect } from 'react'
import { db } from "@/public/utils/dbConfig";
import { Budgets } from '@/public/utils/schema';
import { useUser } from '@clerk/nextjs';
import { eq, getTableColumns } from 'drizzle-orm';
import { sql } from 'drizzle-orm';
import { Expenses } from '@/public/utils/schema';


function ExpensesScreen(params) {
    const {user}=useUser();
    useEffect(()=>{
       
       user&&getBudgetInfo();
    },[user]);

    const getBudgetInfo=async()=>{
        const result=await db.select({
            ...getTableColumns(Budgets),
            totalSpend:sql `sum(${Expenses.amount})`.mapWith(Number),
            totalItem: sql `count(${Expenses.id})` .mapWith(Number),
          }).from(Budgets)
          .leftJoin(Expenses,eq(Budgets.id,Expenses.budgetId))
          .where(eq(Budgets.createdBy,user?.primaryEmailAddress?.emailAddress))
          .where(eq(Budgets.id,params.id))
          .groupBy(Budgets.id);

          console.log(result);
    }
  return (
    <div className='p-10'>
        <h2 className='text-2xl font-bold'>My Expenses</h2>
    </div>
  )
}

export default ExpensesScreen
