export const formatCurrency = (value: string) => {
    const numericValue = Number(value); // Mengonversi string menjadi number
    if (isNaN(numericValue)) {
        return "Invalid number"; // Mengembalikan pesan error jika konversi gagal
    }
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(numericValue);
};
