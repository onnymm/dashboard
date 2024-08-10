import { MoonIcon, SunIcon } from '@heroicons/react/20/solid' // Importamos los iconos de la librería Heroicons
import { useEffect, useState } from 'react' // Importamos los hooks useEffect y useState de React

const NavbarDarkMode = () => {
	const [theme, setTheme] = useState(() => {
		// Recupera el tema configurado de la app desde localStorage
		const storedTheme = localStorage.getItem('theme')
		// Si hay un tema definido en localStorage
		if (storedTheme) {
			return storedTheme // Utiliza ese tema como estado inicial
		}
		// Si no hay un tema definido, verificamos la preferencia del navegador
		const systemPrefersDark = window.matchMedia(
			'(prefers-color-scheme: dark)'
		).matches
		return systemPrefersDark ? 'dark' : 'light' // Establece el tema basado en la preferencia del sistema
	})

	// useEffect para aplicar el tema en el DOM y guardarlo en localStorage
	useEffect(() => {
		if (theme === 'dark') {
			// Si el tema es oscuro, añadimos la clase 'dark' al elemento raíz del documento
			document.documentElement.classList.add('dark')
			localStorage.setItem('theme', 'dark') // Guardamos el tema en localStorage
		} else {
			// Si el tema es claro, removemos la clase 'dark' del elemento raíz del documento
			document.documentElement.classList.remove('dark')
			localStorage.setItem('theme', 'light') // Guardamos el tema en localStorage
		}
	}, [theme]) // El efecto se ejecuta cada vez que cambia el tema

	// Función para alternar el tema
	const handleSwitch = () => {
		setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark')) // Alterna entre 'dark' y 'light'
	}

	return (
		// Botón para alternar el tema
		<button onClick={handleSwitch}>
			{/* Este div amplía el hitbox del switch */}
			<div className='rounded-full px-1 py-2'>
				{/* Fondo del switch */}
				<div className='w-12 rounded-full bg-darkmode-switch-background p-1 shadow-darkmode-switch-background-s transition dark:bg-darkmode-switch-background-d'>
					{/* Parte elevada del switch */}
					<div
						className={`size-min p-1 ${theme === 'dark' ? 'translate-x-5' : ''} rounded-full bg-navbar-background shadow-darkmode-switch-s transition duration-300 dark:bg-navbar-background-d`}
					>
						{/* Icono del tema actual */}
						{theme === 'dark' ? (
							<MoonIcon className='size-3 opacity-80 dark:text-white' /> // Icono de luna para el modo oscuro
						) : (
							<SunIcon className='size-3 opacity-80 dark:text-white' /> // Icono de sol para el modo claro
						)}
					</div>
				</div>
			</div>
		</button>
	)
}

export default NavbarDarkMode // Exportamos el componente
