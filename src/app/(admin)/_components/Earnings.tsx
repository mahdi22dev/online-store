"use client";
import React, { useEffect, useState } from "react";
import moment from "moment";
import ClipLoader from "react-spinners/ClipLoader";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { getPaymentsData } from "@/actions/admin-actions";
import Stripe from "stripe";

interface EarningsData {
  currentWeekEarnings: number;
  currentMonthEarnings: number;
  weeklyGrowth: number;
  monthlyGrowth: number;
}

const fetchEarningsData = async (): Promise<EarningsData> => {
  const today = moment().unix();
  const startOfWeek = moment().startOf("isoWeek").unix();
  const startOfMonth = moment().startOf("month").unix();
  const startOfLastWeek = moment()
    .subtract(1, "weeks")
    .startOf("isoWeek")
    .unix();
  const startOfLastMonth = moment()
    .subtract(1, "months")
    .startOf("month")
    .unix();

  const currentWeekPayments = await getPaymentsData(startOfWeek, today);
  const currentMonthPayments = await getPaymentsData(startOfMonth, today);
  const lastWeekPayments = await getPaymentsData(startOfLastWeek, startOfWeek);
  const lastMonthPayments = await getPaymentsData(
    startOfLastMonth,
    startOfMonth,
  );

  const sumEarnings = (payments: Stripe.PaymentIntent[]) =>
    payments.reduce((sum, payment) => sum + payment.amount_received, 0);

  const currentWeekEarnings = sumEarnings(currentWeekPayments);
  const currentMonthEarnings = sumEarnings(currentMonthPayments);
  const lastWeekEarnings = sumEarnings(lastWeekPayments);
  const lastMonthEarnings = sumEarnings(lastMonthPayments);

  const weeklyGrowth = lastWeekEarnings
    ? ((currentWeekEarnings - lastWeekEarnings) / lastWeekEarnings) * 100
    : 0;
  const monthlyGrowth = lastMonthEarnings
    ? ((currentMonthEarnings - lastMonthEarnings) / lastMonthEarnings) * 100
    : 0;

  return {
    currentWeekEarnings,
    currentMonthEarnings,
    weeklyGrowth,
    monthlyGrowth,
  };
};

const EarningsCard: React.FC = () => {
  const [earningsData, setEarningsData] = useState<EarningsData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await fetchEarningsData();
        setEarningsData(data);
      } catch (error) {
        console.error("Error fetching earnings data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <Card>
        <CardContent className="flex min-h-[384px] items-center justify-center p-6 text-sm">
          <ClipLoader size={24} color="#333" />
        </CardContent>
      </Card>
    );
  }

  if (!earningsData) {
    return (
      <Card>
        <CardContent className="p-6 text-sm">
          <div>Error fetching earnings data.</div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="grid w-full gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
      <Card x-chunk="dashboard-05-chunk-1">
        <CardHeader className="pb-2">
          <CardDescription>This Week</CardDescription>
          <CardTitle className="text-4xl">
            ${(earningsData.currentWeekEarnings / 100).toFixed(2)}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-xs text-muted-foreground">
            {Number(earningsData.monthlyGrowth.toFixed(2)) >= 0 && "+"}{" "}
            {earningsData.weeklyGrowth.toFixed(2)}% from last week
          </div>
        </CardContent>
      </Card>
      <Card x-chunk="dashboard-05-chunk-2">
        <CardHeader className="pb-2">
          <CardDescription>This Month</CardDescription>
          <CardTitle className="text-4xl">
            ${(earningsData.currentMonthEarnings / 100).toFixed(2)}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-xs text-muted-foreground">
            {Number(earningsData.monthlyGrowth.toFixed(2)) >= 0 && "+"}{" "}
            {earningsData.monthlyGrowth.toFixed(2)}% from last month
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EarningsCard;
