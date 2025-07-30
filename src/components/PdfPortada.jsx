import React from "react";
import { Box, Typography, Grid, Avatar } from "@mui/material";
import PublicIcon from "@mui/icons-material/Public";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import ShieldIcon from "@mui/icons-material/Shield";

// Recibe la consultora como prop
export default function PdfPortada({ consultora }) {
  return (
    <>
      <Box
        className="pdf-portada"
        sx={{
          width: { xs: '99vw', sm: '700px', md: '794px' },
          height: { xs: 'auto', md: '1122px' },
          maxWidth: "100vw",
          background: "#fff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          p: 0,
          m: 0,
          boxSizing: "border-box",
          overflow: "hidden",
          position: "relative"
        }}
      >
        {/* Info de la consultora */}
        {consultora && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              mt: 4,
              mb: 2,
              width: "100%",
            }}
          >
            <Avatar
              src={consultora.foto}
              alt={consultora.nombre}
              sx={{ width: 90, height: 90, mb: 1, border: "2px solid #1976d2" }}
            />
            <Typography variant="h6" sx={{ fontWeight: 700, color: "#1976d2" }}>
              {consultora.nombre}
            </Typography>
            <Typography sx={{ color: "#444" }}>
              Email: {consultora.email}
            </Typography>
            <Typography sx={{ color: "#444", mb: 1 }}>
              Teléfono: {consultora.telefono}
            </Typography>
          </Box>
        )}

        <Typography
          variant="h5"
          align="center"
          fontWeight={700}
          sx={{ mb: 1, mt: 2, letterSpacing: 0.5 }}
        >
          📝 Propuesta de Protección y Ahorro – MetLife
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          fontWeight={600}
          sx={{ mb: 2, opacity: 0.8, fontSize: 18 }}
        >
          Resumen Ejecutivo
        </Typography>
        <Box sx={{ maxWidth: 540, mb: 2 }}>
          <Typography align="center" sx={{ fontSize: 17, mb: 1 }}>
            <b>¿Qué ofrece este plan?</b>
          </Typography>
          <Typography align="center" sx={{ color: "#444", fontSize: 15, lineHeight: 1.5 }}>
            Una solución integral que combina:
          </Typography>
          <ul style={{ margin: "10px auto 0", maxWidth: 440, textAlign: "left", color: "#444", fontSize: 15, paddingLeft: 22 }}>
            <li>
              Cobertura en caso de fallecimiento e invalidez, junto con otros beneficios de un seguro de vida.
            </li>
            <li>
              Acumulación de capital a mediano y largo plazo, con retorno proyectado.
            </li>
          </ul>
        </Box>
        <Typography
          variant="h6"
          align="center"
          sx={{ mb: 1, mt: 1, color: "#1976d2", fontWeight: 700, fontSize: 18 }}
        >
          ¿Por qué elegir MetLife?
        </Typography>
        <Grid container spacing={2} justifyContent="center" sx={{ mb: 2, maxWidth: 700 }}>
          <Grid item xs={12} md={4}>
            <Box textAlign="center">
              <PublicIcon sx={{ fontSize: 40, color: "#1976d2" }} />
              <Typography fontWeight={700} sx={{ mt: 0.5, fontSize: 15 }}>
                🌎 Experiencia internacional
              </Typography>
              <Typography sx={{ mt: 0.5, color: "#444", fontSize: 13 }}>
                155 años de trayectoria global en 43 países y más de 10 años en Colombia.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box textAlign="center">
              <VerifiedUserIcon sx={{ fontSize: 40, color: "#43a047" }} />
              <Typography fontWeight={700} sx={{ mt: 0.5, fontSize: 15 }}>
                🔒 Confianza comprobada
              </Typography>
              <Typography sx={{ mt: 0.5, color: "#444", fontSize: 13 }}>
                Más de 160 mil millones de pesos pagados en siniestros en los últimos 3 años.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box textAlign="center">
              <ShieldIcon sx={{ fontSize: 40, color: "#0277bd" }} />
              <Typography fontWeight={700} sx={{ mt: 0.5, fontSize: 15 }}>
                📊 Solidez financiera
              </Typography>
              <Typography sx={{ mt: 0.5, color: "#444", fontSize: 13 }}>
                Calificación AA otorgada por Fitch Ratings, reflejando estabilidad y respaldo económico.
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ maxWidth: 540, mb: 2 }}>
          <Typography
            align="center"
            sx={{
              fontStyle: "italic",
              fontWeight: 500,
              mb: 1,
              color: "#1abc74",
              fontSize: 15
            }}
          >
            Beneficios clave del producto:
          </Typography>
          <ul style={{ margin: "0 auto 0", maxWidth: 440, textAlign: "left", color: "#444", fontSize: 14, paddingLeft: 22 }}>
            <li>
              Coberturas iniciales que aumentan anualmente con el IPC.
            </li>
            <li>
              Capital acumulado que también crece año a año.
            </li>
            <li>
              Diferenciales únicos frente a otras compañías del mercado.
            </li>
          </ul>
        </Box>
        <Typography align="center" sx={{ maxWidth: 500, fontSize: 14, color: "#444" }}>
          A continuación, te detallo beneficios del producto MetLife que marcan gran diferencia respecto a compañías con su misma actividad.
        </Typography>
      </Box>
      <div style={{
        width: "100%",
        height: "1px",
        pageBreakAfter: "always",
        breakAfter: ""
      }} />
    </>
  );
}