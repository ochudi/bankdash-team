"use client";
import React from "react";
import { Box, Card, CardContent, Container, Typography } from "@mui/material";
import { BarChart, Payments, LocalAtm } from "@mui/icons-material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Sample data for charts
const yearlyInvestmentData = [
  { year: "2016", amount: 5000 },
  { year: "2017", amount: 22000 },
  { year: "2018", amount: 16000 },
  { year: "2019", amount: 35000 },
  { year: "2020", amount: 20000 },
  { year: "2021", amount: 28000 },
];

const monthlyRevenueData = [
  { month: "Jan", revenue: 3000 },
  { month: "Feb", revenue: 4000 },
  { month: "Mar", revenue: 3500 },
  { month: "Apr", revenue: 5000 },
  { month: "May", revenue: 4500 },
  { month: "Jun", revenue: 6000 },
  { month: "Jul", revenue: 7000 },
  { month: "Aug", revenue: 8000 },
  { month: "Sep", revenue: 7500 },
  { month: "Oct", revenue: 9000 },
  { month: "Nov", revenue: 8500 },
  { month: "Dec", revenue: 9500 },
];

export default function BankDashboard() {
  return (
    <Box sx={{ display: "flex", bgcolor: "#f5f7fa", minHeight: "100vh" }}>
      {/* Main Content */}
      <Box sx={{ flexGrow: 1, overflow: "auto" }}>
        {/* Dashboard Content */}
        <Container maxWidth="xl" sx={{ py: 4 }}>
          {/* Icons Section with Text */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mb: 4,
              gap: 3,
            }}
          >
            {/* Total Invested Amount */}
            <Box
              sx={{
                width: "20%",
                display: "flex",
                alignItems: "center",
                backgroundColor: "#ffffff",
                borderRadius: "16px",
                padding: 2,
                boxShadow: 2,
              }}
            >
              <Box
                sx={{
                  width: 50,
                  height: 50,
                  bgcolor: "#22c55e",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mr: 2,
                }}
              >
                <LocalAtm sx={{ color: "#ffffff", fontSize: "28px" }} />
              </Box>
              <Box>
                <Typography
                  variant="body1"
                  color="#b8c6df"
                  sx={{ fontWeight: 600 }}
                >
                  Total Invested Amount
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  $150,000
                </Typography>
              </Box>
            </Box>

            {/* Number of Investments */}
            <Box
              sx={{
                width: "20%",
                display: "flex",
                alignItems: "center",
                backgroundColor: "#ffffff",
                borderRadius: "16px",
                padding: 2,
                boxShadow: 2,
              }}
            >
              <Box
                sx={{
                  width: 50,
                  height: 50,
                  bgcolor: "#ec4899",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mr: 2,
                }}
              >
                <BarChart sx={{ color: "#ffffff", fontSize: "28px" }} />
              </Box>
              <Box>
                <Typography
                  variant="body1"
                  color="#b8c6df"
                  sx={{ fontWeight: "bold" }}
                >
                  Number of Investments
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  1,250
                </Typography>
              </Box>
            </Box>

            {/* Rate of Return */}
            <Box
              sx={{
                width: "20%",
                display: "flex",
                alignItems: "center",
                backgroundColor: "#ffffff",
                borderRadius: "16px",
                padding: 2,
                boxShadow: 2,
              }}
            >
              <Box
                sx={{
                  width: 50,
                  height: 50,
                  bgcolor: "#3b82f6",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mr: 2,
                }}
              >
                <Payments sx={{ color: "#ffffff", fontSize: "28px" }} />
              </Box>
              <Box>
                <Typography
                  variant="body1"
                  color="#b8c6df"
                  sx={{ fontWeight: "bold" }}
                >
                  Rate of Return
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  +5.80%
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Charts Section */}
          <Box sx={{ display: "flex", gap: 4, mb: 4 }}>
            {/* Yearly Total Investment Title */}
            <Box sx={{ width: "48%" }}>
              <Typography
                variant="h4"
                color="#333b69"
                sx={{ fontWeight: 600, mb: 2 }}
              >
                Yearly Total Investment
              </Typography>
              <Card elevation={0} sx={{ height: "80%", borderRadius: 5 }}>
                <CardContent>
                  <Box sx={{ height: 300, width: "100%" }}>
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={yearlyInvestmentData}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis
                          dataKey="year"
                          type="category"
                          domain={["2016", "2021"]}
                          width={100}
                          tick={{ angle: 0 }}
                          interval={0}
                        />
                        <YAxis
                          tickFormatter={(value) =>
                            `$${value.toLocaleString()}`
                          }
                          domain={[0, 40000]}
                          ticks={[0, 10000, 20000, 30000, 40000]}
                          tickMargin={35}
                          width={100}
                          axisLine={{ stroke: "#ddd", strokeWidth: 1 }}
                          tickLine={{ stroke: "#ddd", strokeWidth: 1 }}
                        />
                        <Tooltip
                          formatter={(value) => [
                            `${value.toLocaleString()}`,
                            "Amount",
                          ]}
                        />
                        <Line
                          type="monotone"
                          dataKey="amount"
                          stroke="#f59e0b"
                          strokeWidth={2}
                          dot={{ r: 4 }}
                          activeDot={{ r: 6 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </Box>
                </CardContent>
              </Card>
            </Box>
            {/* Monthly Revenue Title */}
            <Box sx={{ width: "52%" }}>
              <Typography
                variant="h4"
                color="#333b69"
                sx={{ fontWeight: 600, mb: 2 }}
              >
                Monthly Revenue
              </Typography>
              <Card elevation={0} sx={{ height: "80%", borderRadius: 5 }}>
                <CardContent>
                  <Box sx={{ height: 300, width: "100%" }}>
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={monthlyRevenueData}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="month" />
                        <YAxis
                          tickFormatter={(value) =>
                            `$${value.toLocaleString()}`
                          }
                          domain={[0, 10000]}
                          ticks={[0, 2500, 5000, 7500, 10000]}
                          tickMargin={35}
                          width={100}
                          axisLine={{ stroke: "#ddd", strokeWidth: 1 }}
                          tickLine={{ stroke: "#ddd", strokeWidth: 1 }}
                        />
                        <Tooltip
                          formatter={(value) => [
                            `${value.toLocaleString()}`,
                            "Revenue",
                          ]}
                        />
                        <Line
                          type="monotone"
                          dataKey="revenue"
                          stroke="#14b8a6"
                          strokeWidth={2}
                          dot={{ r: 4 }}
                          activeDot={{ r: 6 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
