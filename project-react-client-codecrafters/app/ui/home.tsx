'use client';
import React, { Suspense } from 'react'

import Card from './card';

import Chart from './AreaChart';

import PieChartData from './PieChartData';

const Dashboard = () => {
  return (
    <>
    <p className="text-white font-extrabold tracking-tight font-mono text-2xl">Dashboard</p>
    <Card />
    <div className='mt-10 flex flex-col'>
    <PieChartData/>
    <Chart/>
    </div>
    </>
  )
}

export default Dashboard;
