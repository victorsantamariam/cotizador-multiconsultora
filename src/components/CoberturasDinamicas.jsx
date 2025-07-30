import React from "react";
import { Box, Typography, Grid, TextField, IconButton, Button } from "@mui/material";
import { NumericFormat } from "react-number-format";
import DeleteIcon from "@mui/icons-material/Delete";

export default function CoberturasDinamicas({ value = [], onChange }) {
  const handleNombre = (idx, nombre) => {
    const updated = [...value];
    updated[idx] = { ...updated[idx], nombre };
    onChange(updated);
  };
  const handleValor = (idx, valor) => {
    const updated = [...value];
    updated[idx] = { ...updated[idx], valor };
    onChange(updated);
  };
  const handleAdd = () => {
    onChange([...value, { nombre: "", valor: "" }]);
  };
  const handleRemove = (idx) => {
    onChange(value.filter((_, i) => i !== idx));
  };
  return (
    <Box>
      <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
        Coberturas adicionales
      </Typography>
      {value.map((cob, idx) => (
        <Grid container spacing={1} alignItems="center" key={idx} sx={{ mb: 1 }}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Cobertura"
              value={cob.nombre}
              onChange={e => handleNombre(idx, e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={10} sm={5}>
            <NumericFormat
              customInput={TextField}
              label="Valor asegurado"
              value={cob.valor}
              onValueChange={v => handleValor(idx, v.value)}
              thousandSeparator="."
              decimalSeparator=","
              prefix="$ "
              fullWidth
            />
          </Grid>
          <Grid item xs={2} sm={1} sx={{ textAlign: { xs: "right", sm: "center" } }}>
            <IconButton onClick={() => handleRemove(idx)}>
              <DeleteIcon />
            </IconButton>
          </Grid>
        </Grid>
      ))}
      <Button onClick={handleAdd} sx={{ mt: 1 }} variant="outlined">
        Agregar cobertura
      </Button>
    </Box>
  );
}