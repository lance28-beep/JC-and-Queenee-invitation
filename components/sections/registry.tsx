"use client"

import { useState } from "react"
import Image from "next/image"
import { Section } from "@/components/section"
import { Building2, Smartphone } from "lucide-react"

const paymentMethods = {
  bpi: {
    id: "bpi",
    label: "BPI Bank",
    description: "Bank transfer via BPI",
    qrSrc: "/QR/BPI.png",
    Icon: Building2,
  },
  gcash: {
    id: "gcash",
    label: "GCash",
    description: "Mobile payment via GCash",
    qrSrc: "/QR/Gcash.png",
    Icon: Smartphone,
  },
} as const

type PaymentMethodKey = keyof typeof paymentMethods

export function Registry() {
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethodKey>("bpi")
  const paymentMethod = paymentMethods[selectedMethod]

  return (
    <Section
      id="registry"
      className="relative overflow-hidden py-10 sm:py-12 md:py-16 lg:py-20"
    >
      <div className="relative z-10 text-center mb-6 sm:mb-8 md:mb-10 px-3 sm:px-4">
        <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
          <div className="w-8 sm:w-12 md:w-16 h-px bg-white/60" />
          <div className="w-1.5 h-1.5 bg-white/80 rounded-full" />
          <div className="w-1.5 h-1.5 bg-white/60 rounded-full" />
          <div className="w-1.5 h-1.5 bg-white/80 rounded-full" />
          <div className="w-8 sm:w-12 md:w-16 h-px bg-white/60" />
        </div>
        
        <h2 className="style-script-regular text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-2 sm:mb-3 md:mb-4">
          Gift Guide
        </h2>
        
        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/90 font-light max-w-2xl mx-auto leading-relaxed px-2">
          Your presence at our wedding is the greatest gift of all. But should you still believe that a gift is worth giving, a small envelope for our future is a delightful blessing.
        </p>
        
        <div className="flex items-center justify-center gap-2 mt-3 sm:mt-4">
          <div className="w-1.5 h-1.5 bg-white/80 rounded-full" />
          <div className="w-1.5 h-1.5 bg-white/60 rounded-full" />
          <div className="w-1.5 h-1.5 bg-white/80 rounded-full" />
        </div>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6">
        <div className="relative bg-[#F4F4F4]/95 backdrop-blur-md border border-[#F3D1C8]/60 rounded-lg sm:rounded-xl md:rounded-2xl shadow-[0_20px_60px_rgba(180,115,119,0.3)] p-4 sm:p-6 md:p-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#F3D1C8]/20 via-transparent to-[#B47377]/10 pointer-events-none" />

          {/* Payment Method Toggle */}
          <div className="relative z-10 mb-4 sm:mb-6">
            <div className="flex items-center justify-center gap-2 sm:gap-3">
              {(Object.keys(paymentMethods) as PaymentMethodKey[]).map((key) => {
                const method = paymentMethods[key]
                const isSelected = selectedMethod === key
                const Icon = method.Icon
                
                return (
                  <button
                    key={key}
                    onClick={() => setSelectedMethod(key)}
                    className={`flex items-center gap-2 px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 rounded-lg sm:rounded-xl transition-all duration-300 ${
                      isSelected
                        ? "bg-[#B47377] text-white shadow-md scale-105"
                        : "bg-white/80 text-[#B47377] hover:bg-white/90 hover:scale-102"
                    }`}
                  >
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="text-xs sm:text-sm md:text-base font-semibold">
                      {method.label}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

          <div className="relative z-10">
            <div className="relative bg-white/95 rounded-xl sm:rounded-2xl border-2 border-dashed border-[#F3D1C8]/40 p-5 sm:p-6 md:p-8 text-center shadow-[0_6px_24px_rgba(180,115,119,0.15)]">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#F4F4F4] px-3 py-1 rounded-full shadow-sm border-2 border-[#F3D1C8]/50 text-xs font-semibold tracking-[0.2em] text-[#B47377] uppercase">
                {paymentMethod.label}
              </div>
              <div className="flex flex-col items-center gap-4 w-full">
                <div className="w-56 h-56 sm:w-64 sm:h-64 border-2 border-dashed border-[#F3D1C8]/40 rounded-xl sm:rounded-2xl flex items-center justify-center bg-white relative overflow-hidden">
                  <Image
                    src={paymentMethod.qrSrc}
                    alt={`${paymentMethod.label} QR code`}
                    fill
                    sizes="256px"
                    className="object-contain p-4"
                  />
                </div>
                <p className="text-sm sm:text-base text-[#B47377] max-w-md">
                  Scan the QR code to make a {selectedMethod === "gcash" ? "mobile payment" : "bank transfer"}.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 sm:mt-8 text-center">
          <p className="text-xs sm:text-sm text-white/90 italic">
            Thank you from the bottom of our hearts.
          </p>
        </div>
      </div>
    </Section>
  )
}
