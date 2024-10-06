import React from "react";

function BudgetItem(budget) {
  return (
    <div>
      <div className=" p-5 border rounded-lg gap-10 flex">
        <div className=" flex gap-2 items-center">
          <h2 className=" text-2xl p-3 px-4 bg-slate-100 rounded-full">
            {budget?.icon}
          </h2>
          <div>
            <h2>{budget.name}</h2>
            <h2>{budget.totalItem} Item</h2>
          </div>
          <h2>${budget.amount}</h2>
        </div>
      </div>
      <div>
        <h2 className=" font-bold text-primary text-lg"></h2>
      </div>

      <div className="mt-5">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-xs text-slate-400">${budget.totalSpend?budget.totalSpend:0}Spend</h2>
        <h2 className="text-xs text-slate-400">${budget.amount-budget.totalSpend} Remaining</h2>
      </div>
        <div className="w-full bg-slate-300 h-2 rounded-full">
          <div className="w-[40%] bg-primary h-2 rounded-full">

          </div>
        </div>
      </div>
    </div>
  );
}

export default BudgetItem;
