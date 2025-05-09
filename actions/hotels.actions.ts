import { axiosClient } from "@/lib/utils";
import { actionResponse, db_query_Interface } from "./packages.actions"

export interface hotelInterface {
    _id: string,
    name: string,
    city: string,
    images: string[],
    __v: number
}

export interface hotelsActionResponse extends actionResponse {
    data?: {
        hotels: Array<hotelInterface>,
    },
}

// Fetch hotels from the backend API
export async function getHotels({ db_query, limit }: { db_query?: db_query_Interface, limit?: number }): Promise<hotelsActionResponse> {
    try {
        const response = await axiosClient.get("/hotels", {
            data: { db_query, limit },
            method: 'GET'
        });

        return {
            success: true,
            message: "Hotels fetched successfully",
            data: response.data
        };
    } catch (error: unknown) {
        // console.error("Error fetching packages:", error);
        return {
            success: false,
            message: "Error fetching hotels",
            error: error instanceof Error ? error.message : "Unknown error"
        };
    }
}