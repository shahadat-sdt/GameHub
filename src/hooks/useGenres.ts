import useData from "@/hooks/useData.ts";

interface Genre {
    id: number;
    name: string;
}


const useGenres = () => useData<Genre>('/genres')

export default useGenres