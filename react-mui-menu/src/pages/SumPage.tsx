import { useMemo, useState } from "react";
import { Button, Paper, TextField, Typography } from "@mui/material";

export default function SumPage() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  const result = useMemo(() => a + b, [a, b]);

  return (
    <Paper sx={{ p: 3, borderRadius: 3 }}>
      <Typography variant="h5" fontWeight={900} gutterBottom>
      Estadísticas (página actual)
      </Typography>

      <Button variant="contained">Contar por genero</Button>
      <Button variant="contained">Porcentaje por estado</Button>
      <Button variant="contained">Promedio edad</Button>
      
      
      <Typography sx={{ mt: 1 }}>
        Resultado: <strong>{result}</strong>
      </Typography>
    </Paper>
  );
}