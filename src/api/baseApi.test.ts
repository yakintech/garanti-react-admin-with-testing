import exp from "constants";
import { axiosInstance } from "../config/axiosInstance";
import { baseApi } from "./baseApi";

jest.mock("../config/axiosInstance");


describe("baseApi", () => {
    const mockData = { id: 1, name: "test" }

    it("should call getAll method", async () => {
        //axios mock tanımlama
        (axiosInstance.get as jest.Mock).mockResolvedValue({ data: mockData });

        const result = await baseApi.getAll("/test"); //dönen verinin mockData olup olmadığını kontrol ediyoruz
        expect(result).toEqual(mockData);
        expect(axiosInstance.get).toHaveBeenCalledWith("/test"); // doğru endpointe gitmiş mi kontrol ediyoruz

    })

})
