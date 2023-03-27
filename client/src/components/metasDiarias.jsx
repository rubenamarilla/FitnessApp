import React from 'react'

const metasDiarias = () => {
  const dias = ["Lun", "Mar", "Mie", "Jue", "Vie", "Sáb", "Dom"];
  
  return (
    <>
      <Grid item xs={12}>
        <Typography variant="h4" component="h4">
          Tus metas diarias
        </Typography>
      </Grid>
      <Grid item direction={"row"} container xs={12}>
        {dias.map((dia, idx) => (
          <Grid container direction="column" key={idx} alignItems={"center"} xs={12} sm={1.6}>
            <Grid item>✔</Grid>
            <Grid item>{dia}</Grid>
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default metasDiarias