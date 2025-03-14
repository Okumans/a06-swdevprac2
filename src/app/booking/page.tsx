import DateReserve from "@/components/DateReserve";
import {
  Button,
  FormControl,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

export default function BookingPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
          Book a Venue
        </h2>
        <FormControl className="w-full space-y-4">
          <TextField
            variant="standard"
            name="Name-Lastname"
            label="Name-Lastname"
            className="w-full"
          />
          <TextField
            variant="standard"
            name="Contact-Number"
            label="Contact-Number"
            className="w-full"
          />
          <Select id="venue" className="w-full">
            <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
            <MenuItem value="Spark">Spark Space</MenuItem>
            <MenuItem value="GrandTable">The Grand Table</MenuItem>
          </Select>
          <DateReserve />
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg">
            Book Venue
          </button>
        </FormControl>
      </div>
    </main>
  );
}
