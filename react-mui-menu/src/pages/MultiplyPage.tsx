import { useMemo, useState } from "react";
import { Paper, TextField, Typography } from "@mui/material";

export default function MultiplyPage() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  const result = useMemo(() => a * b, [a, b]);

  return (
    <Paper sx={{ p: 3, borderRadius: 3 }}>
      <Typography variant="h5" fontWeight={900} gutterBottom>
        Información
      </Typography>

      <Typography sx={{ mt: 2 }}>
      -API pública de personajes de Los Simpsons
      </Typography>
      
      <Typography sx={{ mt: 2 }}>
      -Imágenes servidas desde CDN estable por ID
      </Typography>

      <Typography sx={{ mt: 2 }}>
      -Todo el sistema está en un solo archivo HTML
      </Typography>
      
    </Paper>
  );
}

