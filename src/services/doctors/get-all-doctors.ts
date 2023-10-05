"use server"

import { Doctor } from "@/interfaces/doctor.interfaces";

export const getAllDoctors = async (): Promise<Doctor[]> => {
    const res = await fetch("http://localhost:5000/api/v1/doctors", {
        next: {
            revalidate: 24 * 60 * 60,
            tags: ["all-doctors"],
        },
    });
    const { data } = await res.json();
    if (res.ok && data) {
        return data
    } else {
        return []
    }

}