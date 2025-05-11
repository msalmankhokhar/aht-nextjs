"use server";
import { axiosClient } from "@/lib/utils";

export interface actionResponse {
    success: boolean,
    message: string,
    data?: JSON | object,
    error?: string
}

export interface packageInterface {
    _id: string,
    title: string,
    rating: number,
    purpose: string,
    category: string,
    labels: string[],
    makkahNights: number,
    madinahNights: number,
    price: number,
    makkahHotel: { name: string },
    madinahHotel: { name: string },
    inclusions: string[],
    exclusions: string[],
    accomType: string,
}

export interface packagesActionResponse extends actionResponse {
    data?: {
        packages: Array<packageInterface>,
        category: string
    },
}

export interface db_query_Interface {
    category?: string,
    purpose?: string,
    price?: number,
    makkahNights?: number,
    madinahNights?: number,
    rating?: number,
}

// Fetch packages from the backend API
export async function getPackages({ db_query, limit }: { db_query?: db_query_Interface, limit?: number }): Promise<packagesActionResponse> {
    try {
        const response = await axiosClient.get("/packages", {
            data: { db_query, limit },
            method: 'GET'
        });

        return {
            success: true,
            message: "Packages fetched successfully",
            data: response.data
        };
    } catch (error: unknown) {
        // console.error("Error fetching packages:", error);
        return {
            success: false,
            message: "Error fetching packages",
            error: error instanceof Error ? error.message : "Unknown error"
        };
    }
}

export async function getPackageById({ id }: { id: string }) {
    try {
        const response = await axiosClient.get(`/packages/${id}`, {
            method: 'GET'
        });

        return {
            success: true,
            message: "Package fetched successfully",
            data: response.data
        };
    } catch (error: unknown) {
        // console.error("Error fetching package:", error);
        return {
            success: false,
            message: "Error fetching package",
            error: error instanceof Error ? error.message : "Unknown error"
        };
    }
}

export async function getPackageBySlug({ slug }: { slug: string }) {
    try {
        const response = await axiosClient.get(`/packages/slug/${slug}`, {
            method: 'GET'
        });
        return {
            success: true,
            message: "Package fetched successfully",
            data: response.data?.data
        };
    } catch (error: unknown) {
        // console.error("Error fetching package:", error);
        return {
            success: false,
            message: "Error fetching package",
            error: error instanceof Error ? error.message : "Unknown error"
        };
    }
}