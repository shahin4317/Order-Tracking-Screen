"use client";

import Image from "next/image";
import React, { useState } from "react";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import tee from "../assect/tee.jpg";
import shoes from "../assect/shoes.jpg";

const OrdertrackingCard = () => {
  const [activeState, setActiveState] = useState("normal");
  const [isLoading, setIsLoading] = useState(false);
  const [showSupport, setShowSupport] = useState(false);

  const handleStateChange = (state) => {
    if (state === activeState) return;

    setIsLoading(true);

    setTimeout(() => {
      setActiveState(state);
      setIsLoading(false);
    }, 700);
  };

  const stateConfig = {
    normal: {
      badge: "On the way",
      title: "Out for delivery",
      description:
        "Your order has left the local facility and is heading to your address.",
      delivery: "Today, 2:00 – 5:00 PM",
      deliveryStatus: "Arriving today",
    },

    delayed: {
      badge: "Delayed",
      title: "Delivery delayed",
      description:
        "Your order is taking a little longer than expected.",
      delivery: "Expected Sep 28",
      deliveryStatus: "New delivery date",
    },

    not_received: {
      badge: "Delivered",
      title: "Package delivered",
      description:
        "This package was marked as delivered to your address.",
      delivery: "Delivered today",
      deliveryStatus: "Delivered",
    },

    not_available: {
      badge: "Tracking pending",
      title: "Tracking not available yet",
      description:
        "We're preparing your package. Tracking details will update within 24 hours.",
      delivery: "We'll update you soon",
      deliveryStatus: "Pending",
    },
  };

  const current = stateConfig[activeState];

  const states = [
    { id: "normal", label: "On the way" },
    { id: "delayed", label: "Delayed" },
    { id: "not_received", label: "Missing" },
    { id: "not_available", label: "Pending" },
  ];

  const getSteps = () => {
    if (activeState === "not_received") {
      return [
        {
          title: "Order confirmed",
          time: "Sep 24 · 10:32 AM",
          completed: true,
        },
        {
          title: "Packed & ready",
          time: "Sep 25 · 08:14 AM",
          completed: true,
        },
        {
          title: "Out for delivery",
          time: "Today · 09:42 AM",
          completed: true,
        },
        {
          title: "Delivered",
          time: "Today · 01:18 PM",
          completed: true,
          current: true,
          description:
            "Your package was marked as delivered.",
        },
      ];
    }

    return [
      {
        title: "Order confirmed",
        time: "Sep 24 · 10:32 AM",
        completed: true,
      },
      {
        title: "Packed & ready",
        time: "Sep 25 · 08:14 AM",
        completed: true,
      },
      {
        title: "Out for delivery",
        time: "Today · 09:42 AM",
        current: true,
        description:
          activeState === "delayed"
            ? "Your package is still on the way, but delivery is taking longer than expected."
            : "Your order is on the way to you.",
      },
      {
        title: "Delivered",
        time:
          activeState === "delayed"
            ? "Expected Sep 28"
            : "Expected today",
      },
    ];
  };

  const steps = getSteps();

  return (
    <main className="min-h-screen bg-[#F7F6F2] px-3 py-4 sm:px-6 sm:py-8">
      <div className="mx-auto w-full max-w-[1100px]">

        {/* ================= HEADER ================= */}
        <header className="mb-3 flex items-center justify-between sm:mb-4">
          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Go back"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E7E5DF] bg-white text-lg text-[#24231F] transition hover:bg-[#F2F0EA] active:scale-95"
            >
              ←
            </button>

            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#96938A]">
                Order tracking
              </p>

              <h1 className="mt-0.5 text-sm font-semibold tracking-tight text-[#24231F] sm:text-base">
                #ORD-20481
              </h1>
            </div>
          </div>

          <button
            type="button"
            aria-label="More options"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E7E5DF] bg-white text-xl text-[#24231F] transition hover:bg-[#F2F0EA]"
          >
            ⋯
          </button>
        </header>

        {/* ================= DEMO STATE SWITCHER ================= */}
        <div className="mb-4">
          <p className="mb-2 px-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#96938A]">
            Preview state
          </p>

          <div className="overflow-x-auto rounded-2xl border border-[#E7E5DF] bg-white p-1 shadow-sm">
            <div className="flex min-w-max gap-1">
              {states.map((state) => (
                <button
                  key={state.id}
                  type="button"
                  onClick={() => handleStateChange(state.id)}
                  className={`rounded-xl px-3 py-2 text-[10px] font-semibold transition-all ${
                    activeState === state.id
                      ? "bg-[#24231F] text-white shadow-sm"
                      : "text-[#77746B] hover:bg-[#F7F6F2]"
                  }`}
                >
                  {state.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ================= RESPONSIVE CONTENT ================= */}
        <div className="grid gap-4 lg:grid-cols-[1.45fr_0.75fr] lg:gap-5">

          {/* ================= LEFT COLUMN ================= */}
          <div className="space-y-4">

            {/* ================= STATUS HERO ================= */}
            <section className="overflow-hidden rounded-[26px] bg-white shadow-[0_8px_35px_rgba(36,35,31,0.06)]">

              <div className="p-5 sm:p-7">

                <div className="flex items-start justify-between gap-4">

                  <div className="min-w-0">

                    {/* STATUS BADGE */}
                    <div
                      className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 ${
                        activeState === "delayed"
                          ? "bg-[#FBF6E9]"
                          : activeState === "not_received"
                          ? "bg-[#EEF4E8]"
                          : "bg-[#EEF4E8]"
                      }`}
                    >
                      <span className="relative flex h-2 w-2">
                        <span
                          className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-50 ${
                            activeState === "delayed"
                              ? "bg-[#B28B4B]"
                              : "bg-[#71865A]"
                          }`}
                        />

                        <span
                          className={`relative inline-flex h-2 w-2 rounded-full ${
                            activeState === "delayed"
                              ? "bg-[#B28B4B]"
                              : "bg-emerald-400"
                          }`}
                        />
                      </span>

                      <span
                        className={`text-[10px] font-semibold uppercase tracking-[0.12em] ${
                          activeState === "delayed"
                            ? "text-[#6F5A2B]"
                            : "text-[#5E704C]"
                        }`}
                      >
                        {current.badge}
                      </span>
                    </div>

                    <h2 className="mt-4 text-[27px] font-semibold tracking-[-0.04em] text-[#24231F] sm:text-4xl">
                      {current.title}
                    </h2>

                    <p className="mt-1.5 max-w-md text-xs leading-5 text-[#77746B] sm:text-sm">
                      {current.description}
                    </p>
                  </div>
                </div>

                {/* ================= DELAY ALERT ================= */}
                {activeState === "delayed" && (
                  <div className="mt-5 flex gap-3 rounded-2xl border border-[#E8D9B8] bg-[#FBF6E9] p-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F1E4C2] text-sm font-bold text-[#6F5A2B]">
                      !
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-[#6F5A2B]">
                        Delivery delayed
                      </p>

                      <p className="mt-1 text-[11px] leading-5 text-[#8B7951]">
                        We are experiencing a delay due to high order
                        volume.
                      </p>
                    </div>
                  </div>
                )}

                {/* ================= DELIVERY TIME ================= */}
                <div className="mt-6 rounded-2xl bg-[#24231F] p-4 text-white sm:p-5">

                  <div className="flex items-center justify-between gap-3">

                    <div>
                      <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-white/45">
                        Estimated delivery
                      </p>

                      {activeState === "delayed" && (
                        <p className="mt-1 text-[11px] text-white/40 line-through">
                          Expected today
                        </p>
                      )}

                      <p className="mt-1 text-sm font-semibold sm:text-base">
                        {current.delivery}
                      </p>
                    </div>

                    <div className="hidden text-right sm:block">
                      <p className="text-[10px] uppercase tracking-wider text-white/40">
                        Status
                      </p>

                      <p
                        className={`mt-1 text-xs font-medium ${
                          activeState === "delayed"
                            ? "text-[#D4B46A]"
                            : "text-emerald-400"
                        }`}
                      >
                        {current.deliveryStatus}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* PROGRESS LINE */}
              <div className="h-1 w-full bg-[#EEECE5]">
                <div
                  className={`h-full transition-all duration-500 ${
                    activeState === "delayed"
                      ? "w-[55%] bg-[#B28B4B]"
                      : activeState === "not_received"
                      ? "w-full bg-[#71865A]"
                      : activeState === "not_available"
                      ? "w-[8%] bg-[#D8D5CC]"
                      : "w-[72%] bg-[#71865A]"
                  }`}
                />
              </div>
            </section>

            {/* ================= NOT RECEIVED SUPPORT ================= */}
            {activeState === "not_received" && (
              <section className="rounded-[26px] border border-[#E8DCD5] bg-[#FFF9F6] p-5 shadow-sm">

                <div className="flex gap-3">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F3E6DE] text-sm font-semibold">
                    ?
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-[#24231F]">
                      Didn't receive your package?
                    </h3>

                    <p className="mt-1 text-xs leading-5 text-[#77746B]">
                      Your order was marked as delivered, but you can
                      report the issue if you didn't receive it.
                    </p>

                    <button
                      type="button"
                      onClick={() => setShowSupport(true)}
                      className="mt-3 rounded-xl bg-[#24231F] px-4 py-2.5 text-[11px] font-semibold text-white transition hover:bg-[#34332E] active:scale-95"
                    >
                      Report missing package
                    </button>
                  </div>

                </div>
              </section>
            )}

            {/* ================= TIMELINE / PENDING ================= */}
            {activeState === "not_available" ? (

              <section className="rounded-[26px] bg-white p-6 text-center shadow-[0_8px_35px_rgba(36,35,31,0.05)] sm:p-8">

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#F2F0EA]">
                  <div className="h-7 w-7 animate-spin rounded-full border-2 border-[#D8D5CC] border-t-[#71865A]" />
                </div>

                <h3 className="mt-5 text-base font-semibold text-[#24231F]">
                  Tracking pending
                </h3>

                <p className="mx-auto mt-2 max-w-sm text-xs leading-5 text-[#96938A]">
                  We're preparing your package. Tracking details will
                  update within 24 hours.
                </p>

              </section>

            ) : (

              <section className="rounded-[26px] bg-white p-5 shadow-[0_8px_35px_rgba(36,35,31,0.05)] sm:p-7">

                <div className="mb-6">

                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#96938A]">
                    Delivery progress
                  </p>

                  <div className="mt-1 flex items-end justify-between">

                    <h3 className="text-lg font-semibold tracking-tight text-[#24231F]">
                      Track your order
                    </h3>

                    <span className="text-[11px] text-[#96938A]">
                      {activeState === "not_received" ? "4 of 4" : "3 of 4"}
                    </span>

                  </div>
                </div>

                <div className="relative">

                  {steps.map((step, index) => (

                    <div
                      key={step.title}
                      className="relative flex gap-3.5"
                    >

                      {/* CONNECTOR */}
                      {index < steps.length - 1 && (
                        <div
                          className={`absolute left-[13px] top-7 h-[calc(100%-2px)] w-px ${
                            step.completed
                              ? "bg-[#A7B99A]"
                              : "bg-[#E5E3DC]"
                          }`}
                        />
                      )}

                      {/* STEP INDICATOR */}
                      <div
                        className={`relative z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border ${
                          step.current
                            ? "border-[#DDDAD1] bg-emerald-400 text-white shadow-[0_0_0_5px_#EEF4E8]"
                            : step.completed
                            ? "border-[#DDDAD1] bg-emerald-400 text-white"
                            : "border-[#DDDAD1] bg-white text-[#C7C4BB]"
                        }`}
                      >
                        {step.completed ? (
                          <span className="text-[11px] font-bold">
                            ✓
                          </span>
                        ) : (
                          <span className="h-1.5 w-1.5 rounded-full bg-[#D2CFC7]" />
                        )}
                      </div>

                      {/* STEP INFO */}
                      <div
                        className={`min-w-0 ${
                          index === steps.length - 1
                            ? "pb-1"
                            : "pb-7"
                        }`}
                      >

                        <div className="flex flex-wrap items-center gap-2">

                          <h4
                            className={`text-sm font-semibold ${
                              step.current
                                ? "text-[#5E704C]"
                                : step.completed
                                ? "text-[#24231F]"
                                : "text-[#AAA79E]"
                            }`}
                          >
                            {step.title}
                          </h4>

                          {step.current && (
                            <span className="rounded-full bg-[#EEF4E8] px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[#5E704C]">
                              Current
                            </span>
                          )}

                        </div>

                        <p className="mt-1 text-[10px] text-[#9B988F]">
                          {step.time}
                        </p>

                        {step.description && (
                          <p className="mt-2 max-w-sm text-xs leading-5 text-[#77746B]">
                            {step.description}
                          </p>
                        )}

                      </div>
                    </div>

                  ))}

                </div>
              </section>
            )}

          </div>

          {/* ================= RIGHT COLUMN ================= */}
          <aside className="space-y-4">

            {/* ================= PRODUCT ================= */}
            <section className="rounded-[26px] bg-white p-5 shadow-[0_8px_35px_rgba(36,35,31,0.05)]">

              <div className="flex items-center justify-between">

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#96938A]">
                    Your order
                  </p>

                  <h3 className="mt-1 text-base font-semibold text-[#24231F]">
                    2 items
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={() => setShowSupport(true)}
                  className="text-[11px] font-semibold text-[#5E704C] hover:underline"
                >
                  View details →
                </button>
              </div>

              {/* Product 1 */}
              <div className="mt-5 flex gap-3.5 border-b border-[#EEECE5] pb-4">

                <div className="flex h-[68px] w-[62px] shrink-0 items-center justify-center overflow-hidden rounded-xl bg-[#F2F0EA]">
                  <Image
                    src={shoes}
                    alt="Everyday Runner"
                    width={100}
                    height={80}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="min-w-0 pt-1">

                  <h4 className="truncate text-sm font-semibold text-[#24231F]">
                    Everyday Runner
                  </h4>

                  <p className="mt-1 text-[11px] text-[#96938A]">
                    Black · Size 42
                  </p>

                  <p className="mt-2 text-[10px] font-medium text-[#77746B]">
                    Qty 1
                  </p>

                </div>
              </div>

              {/* Product 2 */}
              <div className="flex gap-3.5 pt-4">

                <div className="flex h-[68px] w-[62px] shrink-0 items-center justify-center overflow-hidden rounded-xl bg-[#F2F0EA]">
                  <Image
                    src={tee}
                    alt="Essential Cotton Tee"
                    width={100}
                    height={80}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="min-w-0 pt-1">

                  <h4 className="truncate text-sm font-semibold text-[#24231F]">
                    Essential Cotton Tee
                  </h4>

                  <p className="mt-1 text-[11px] text-[#96938A]">
                    White · Size M
                  </p>

                  <p className="mt-2 text-[10px] font-medium text-[#77746B]">
                    Qty 1
                  </p>

                </div>
              </div>
            </section>

            {/* ================= ADDRESS ================= */}
            <section className="rounded-[26px] bg-white p-5 shadow-[0_8px_35px_rgba(36,35,31,0.05)]">

              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#96938A]">
                Delivery address
              </p>

              <div className="mt-4 flex gap-3">

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#F2F0EA] text-sm">
                  <SiHomeassistantcommunitystore />
                </div>

                <div className="min-w-0">

                  <h4 className="text-sm font-semibold text-[#24231F]">
                    Home
                  </h4>

                  <p className="mt-1 text-[11px] leading-5 text-[#96938A]">
                    24 Lake View Road, Sylhet, Bangladesh
                  </p>

                </div>
              </div>
            </section>

            {/* ================= ACTIONS ================= */}
            <section className="rounded-[26px] bg-white p-5 shadow-[0_8px_35px_rgba(36,35,31,0.05)]">

              <button
                type="button"
                onClick={() => setShowSupport(true)}
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#24231F] px-4 py-3.5 text-xs font-semibold text-white transition hover:bg-[#34332E] active:scale-[0.98]"
              >
                <span>💬</span>
                Contact support
              </button>

              <button
                type="button"
                onClick={() => setShowSupport(true)}
                className="mt-2.5 w-full rounded-2xl border border-[#E5E2D9] bg-white px-4 py-3.5 text-xs font-semibold text-[#24231F] transition hover:bg-[#F7F6F2] active:scale-[0.98]"
              >
                View order details
              </button>

              <p className="mt-4 text-center text-[10px] text-[#A09D94]">
                Need help with your delivery?{" "}
                <button
                  type="button"
                  onClick={() => setShowSupport(true)}
                  className="font-semibold text-[#5E704C]"
                >
                  Get help
                </button>
              </p>

            </section>
          </aside>
        </div>
      </div>

      {/* ================= LOADING ================= */}
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/10 backdrop-blur-[2px]">

          <div className="rounded-2xl bg-white px-5 py-4 shadow-xl">

            <div className="mx-auto h-6 w-6 animate-spin rounded-full border-2 border-[#DDDAD1] border-t-[#71865A]" />

            <p className="mt-2 text-[10px] font-medium text-[#77746B]">
              Updating tracking...
            </p>

          </div>
        </div>
      )}

      {/* ================= SUPPORT MODAL ================= */}
      {showSupport && (
        <div
          className="fixed inset-0 z-[60] flex items-end justify-center bg-black/30 p-3 sm:items-center"
          onClick={() => setShowSupport(false)}
        >

          <div
            className="w-full max-w-md rounded-[28px] bg-white p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >

            <div className="flex items-start justify-between">

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#96938A]">
                  Customer support
                </p>

                <h3 className="mt-1 text-xl font-semibold text-[#24231F]">
                  How can we help?
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setShowSupport(false)}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F5F3ED] text-sm"
              >
                ✕
              </button>

            </div>

            <div className="mt-5 space-y-2">

              <button
                type="button"
                onClick={() => setShowSupport(false)}
                className="w-full rounded-2xl border border-[#E7E5DF] p-4 text-left transition hover:bg-[#F7F6F2]"
              >
                <p className="text-sm font-semibold text-[#24231F]">
                  💬 Live chat
                </p>

                <p className="mt-1 text-[11px] text-[#96938A]">
                  Chat with our support team
                </p>
              </button>

              <button
                type="button"
                onClick={() => setShowSupport(false)}
                className="w-full rounded-2xl border border-[#E7E5DF] p-4 text-left transition hover:bg-[#F7F6F2]"
              >
                <p className="text-sm font-semibold text-[#24231F]">
                  📦 Report an issue
                </p>

                <p className="mt-1 text-[11px] text-[#96938A]">
                  Tell us what happened
                </p>
              </button>

            </div>

            <button
              type="button"
              onClick={() => setShowSupport(false)}
              className="mt-5 w-full rounded-2xl bg-[#24231F] py-3.5 text-xs font-semibold text-white"
            >
              Close
            </button>

          </div>
        </div>
      )}
    </main>
  );
};

export default OrdertrackingCard;