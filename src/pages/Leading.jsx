import '../css/leading.css'

export const Leading = () => {
  return (
    <>
      <div className='leadingHeader'>
        <div className='leadingImage'>
          <img src='image\Profile.jpeg' alt='' className='personalImage' />
          <div className='leadingInfo'>
            <p>¡Hola! Soy Juan Sebastián Henao Vanegas, tengo 19 años y actualmente resido en Caldas, Antioquia. Me apasiona la programación y tengo experiencia en el desarrollo web con herramientas como Python, JavaScript, Node.js, React, Django, MySQL y Git.
              Además, cuento con experiencia en la creación de reportes y modelado de datos utilizando Power BI, así como en operaciones DAX, Excel y Power Query.
            </p>
            <p>Fuera del ámbito profesional, soy una persona muy deportiva, con un amor especial por el fútbol. En mi tiempo libre, suelo practicarlo con frecuencia. Me considero una persona sociable y con habilidades para relacionarme con los demás, siempre buscando una convivencia armoniosa.</p>
          </div>
        </div>
        <div className='leadingBody'>
          <h1>Educación</h1>
          <div>
            <p>Soy Tecnologo en analisis y desarrollo de sistemas de informacion del SENA. En mis estudios trabaje con JavaScript, Node js, MySql, entre otros, con estas herramientas mis compañeros de grupo y yo desarrollados tanto el Backend y Frontend del proyecto que se nos exigia. </p>
            <p>Este proyecto consto de una Web la cual permitiera tanto a los administradores de bodega como a la comunidad educativa poder mejorar los prestamos de dicha bodega, pero no solo fueron los prestamos, tambien teniamos que solucionar la gestion de los materiales y herramientas que ingresaban y salian de la bodega, autorizaciones, seguimiento de prestamos, entre otras funciones mas que el aplicativo requeria. El proyecto pudo llevarse a cabo y ser completado.</p>
          </div>
        </div>
      </div>
    </>
  )
}
