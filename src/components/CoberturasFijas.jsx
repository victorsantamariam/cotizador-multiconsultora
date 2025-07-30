import React from "react";
import { Box, Typography, Grid, TextField, Chip } from "@mui/material";
import { NumericFormat } from "react-number-format";

export default function CoberturasFijas({ value = [], onChange, opciones = [] }) {
  // value: [{nombre, valor}]
  const handleSelect = (nombre) => {
    if (!value.some(v => v.nombre === nombre)) {
      onChange([...value, {nombre, valor: ""}]);
    }
  };
  const handleRemove = (nombre) => {
    onChange(value.filter(v => v.nombre !== nombre));
  };
  const handleValorChange = (idx, val) => {
    const updated = [...value];
    updated[idx] = {...updated[idx], valor: val};
    onChange(updated);
  };

  return (
    <Box>
      <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
        Coberturas fijas
      </Typography>
      <Box sx={{ mb: 2, display: "flex", flexWrap: "wrap", gap: 1, overflowX: "auto" }}>
        {opciones.map(opcion => (
          <Chip
            key={opcion}
            label={opcion}
            color={value.some(v => v.nombre === opcion) ? "success" : "default"}
            onClick={() => handleSelect(opcion)}
            disabled={value.some(v => v.nombre === opcion)}
            sx={{ cursor: value.some(v => v.nombre === opcion) ? "not-allowed" : "pointer" }}
          />
        ))}
      </Box>

      {value.length > 0 && (
        <Grid container spacing={2}>
          {value.map((cob, idx) => (
            <React.Fragment key={cob.nombre}>
              <Grid item xs={8} sm={9}>
                <Chip
                  label={cob.nombre}
                  color="success"
                  onDelete={() => handleRemove(cob.nombre)}
                  sx={{ mb: 1, width: "100%" }}
                />
              </Grid>
              <Grid item xs={4} sm={3}>
                <NumericFormat
                  customInput={TextField}
                  value={cob.valor || ""}
                  onValueChange={v => handleValorChange(idx, v.value)}
                  thousandSeparator="."
                  decimalSeparator=","
                  prefix="$ "
                  fullWidth
                  label="Valor asegurado"
                />
              </Grid>
            </React.Fragment>
          ))}
        </Grid>
      )}
    </Box>
  );
}