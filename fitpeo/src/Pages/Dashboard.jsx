import React from 'react'
import DashboardStatsGrid from '../Components/DashboardStatsGrid'
import TransactionChart from '../Components/TransactionChart'
import CustomerChart from '../Components/CustomerChart'
import RecentOrders from '../Components/PopularProducts'

const Dashboard = () => {
  return (
    <div className='flex flex-col gap-4'>
      <DashboardStatsGrid/>
      <div className='flex flex-row gap-4 w-full'>
      <TransactionChart/>
      <CustomerChart/>
      </div>
      <div>
        <RecentOrders/>
      </div>
     
    </div>
  )
}

export default Dashboard