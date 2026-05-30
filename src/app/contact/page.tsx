"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { Mail, MapPin, Phone, Clock } from "lucide-react";

export default function ContactUsPage() {
  const [formData, setFormData] = React.useState({
    fullName: "",
    emailAddress: "",
    companyName: "",
    projectDetails: "",
  });
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { fullName, emailAddress, companyName, projectDetails } = formData;
    const companyText = companyName ? ` dari ${companyName}` : "";
    const message = `Halo KODWA TECH, saya ${fullName}${companyText}. Saya ingin berkonsultasi mengenai proyek: ${projectDetails}. Hubungi saya kembali di email: ${emailAddress}.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/6285924155519?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight text-center mb-4">
          Mari Mulai Proyek Anda
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed text-center mb-16">
          Diskusikan ide, kebutuhan sistem, atau transformasi digital bisnis
          Anda bersama tim ahli KODWA TECH.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          {/* Kolom Kiri: Informasi Kontak & Jam Kerja */}
          <div className="flex flex-col items-start space-y-6 bg-gray-50 dark:bg-zinc-800 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Informasi Kontak & Jam Kerja
            </h2>
            <div className="flex items-start space-x-4">
              <Mail className="text-purple-600 h-6 w-6 flex-shrink-0" />
              <div>
                <p className="font-semibold text-gray-800 dark:text-white">
                  Email
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  techkodwa@gmail.com
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Phone className="text-purple-600 h-6 w-6 flex-shrink-0" />
              <div>
                <p className="font-semibold text-gray-800 dark:text-white">
                  WhatsApp
                </p>
                <p className="text-gray-600 dark:text-gray-400">085924155519</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <MapPin className="text-purple-600 h-6 w-6 flex-shrink-0" />
              <div>
                <p className="font-semibold text-gray-800 dark:text-white">
                  Alamat Kantor
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  Jl. Mangga Besar II, Jakarta Barat
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Clock className="text-purple-600 h-6 w-6 flex-shrink-0" />
              <div>
                <p className="font-semibold text-gray-800 dark:text-white">
                  Jam Operasional
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  Senin - Jumat (09:00 - 18:00 WIB)
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
              Tim kami biasanya merespons dalam waktu kurang dari 24 jam kerja.
            </p>
          </div>

          {/* Kolom Kanan: Formulir Konsultasi Interaktif */}
          <div className="bg-gray-50 dark:bg-zinc-800 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Formulir Konsultasi
            </h2>
            {isSubmitted ? (
              <div className="text-center py-8 text-green-600 dark:text-green-400 text-lg font-semibold">
                Terima kasih! Pesan Anda telah terkirim. Tim KODWA TECH akan
                segera menghubungi Anda.
              </div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Nama Lengkap
                  </label>
                  <Input
                    type="text"
                    id="fullName"
                    placeholder="Masukkan nama Anda"
                    className="mt-1 block w-full"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="emailAddress"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Alamat Email
                  </label>
                  <Input
                    type="email"
                    id="emailAddress"
                    placeholder="nama@perusahaan.com"
                    className="mt-1 block w-full"
                    value={formData.emailAddress}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="companyName"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Nama Perusahaan / Organisasi (Opsional)
                  </label>
                  <Input
                    type="text"
                    id="companyName"
                    placeholder="Optional"
                    className="mt-1 block w-full"
                    value={formData.companyName}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label
                    htmlFor="projectDetails"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Detail Kebutuhan Proyek
                  </label>
                  <Textarea
                    id="projectDetails"
                    rows={5}
                    placeholder="Ceritakan singkat mengenai aplikasi atau sistem yang ingin Anda bangun..."
                    className="mt-1 block w-full"
                    value={formData.projectDetails}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transform transition duration-300 hover:scale-105 w-full"
                >
                  Kirim Permintaan Konsultasi
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
