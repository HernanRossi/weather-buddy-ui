import React from 'react'
import { WeatherComponentProps } from '../../interfaces/Weather'
import '../../styles/Weather.scss'

// Credit for base css weather animation goes to Tuan Hoang https://codepen.io/code4food
export const Sunny = ({ height, width }: WeatherComponentProps) => {
    return (
        <svg style={{ height: `${height}px`, width: `${width}px` }} viewBox="0 0 220 220">
            <g className="sunny-short-ray">
                <path fill="#43647E" d="M111.961,65.447l-0.014-8.394c-0.003-1.617-1.318-2.927-2.935-2.925c-1.616,0.003-2.924,1.318-2.924,2.935
		l0.014,8.474C108.064,65.375,110.021,65.354,111.961,65.447z"/>
                <path fill="#43647E" d="M75.396,81.343c1.257-1.484,2.607-2.9,4.063-4.221l-5.938-5.918c-1.146-1.142-3-1.14-4.143,0.005
		c-1.142,1.146-1.139,3.001,0.008,4.142L75.396,81.343z"/>
                <path fill="#43647E" d="M163.276,112.648c0.388-0.001,0.756-0.078,1.094-0.213c1.074-0.437,1.83-1.492,1.83-2.721
		c-0.004-1.617-1.315-2.927-2.933-2.925l-8.478,0.015c0.164,1.96,0.186,3.917,0.091,5.856L163.276,112.648z"/>
                <path fill="#43647E" d="M143.207,80.158l5.918-5.937c1.144-1.146,1.14-3-0.005-4.142c-1.147-1.143-3.001-1.14-4.143,0.004
		l-5.992,6.013C140.471,77.353,141.884,78.704,143.207,80.158z"/>
                <path fill="#43647E" d="M56.353,108.382c-1.619,0.002-2.928,1.317-2.924,2.935c0.004,1.615,1.318,2.925,2.934,2.923l8.473-0.014
		c-0.16-1.963-0.182-3.917-0.088-5.858L56.353,108.382z"/>
                <path fill="#43647E" d="M144.234,139.686c-1.258,1.484-2.609,2.899-4.063,4.223l5.939,5.918c0.857,0.855,2.111,1.068,3.167,0.639
		c0.354-0.143,0.687-0.357,0.974-0.646c1.143-1.145,1.139-3-0.006-4.141L144.234,139.686z"/>
                <path fill="#43647E" d="M107.669,155.582l0.013,8.395c0.003,1.617,1.317,2.928,2.934,2.922c0.388,0,0.755-0.074,1.093-0.213
		c1.077-0.434,1.834-1.488,1.83-2.719l-0.014-8.475C111.564,155.654,109.608,155.676,107.669,155.582z"/>
                <path fill="#43647E" d="M76.421,140.871l-5.917,5.938c-1.142,1.144-1.141,2.999,0.006,4.142c0.857,0.855,2.112,1.068,3.17,0.641
		c0.354-0.144,0.687-0.361,0.972-0.646l5.991-6.012C79.159,143.676,77.743,142.326,76.421,140.871z"/>
            </g>
            <g className="sunny-long-ray">
                <path fill="#43647E" d="M138.495,51.723c0.936-2.209-0.096-4.761-2.307-5.697c-2.211-0.938-4.763,0.096-5.697,2.306l-7.959,18.792
		c-0.014,0.034-0.021,0.07-0.035,0.103c2.787,0.818,5.487,1.9,8.064,3.232L138.495,51.723z"/>
                <path fill="#43647E" d="M88.124,70.841c0.014,0.031,0.035,0.058,0.051,0.091c1.508-0.822,3.072-1.576,4.703-2.238
		c1.087-0.44,2.184-0.82,3.283-1.17l-7.639-18.862c-0.901-2.226-3.436-3.298-5.662-2.397c-2.223,0.901-3.299,3.435-2.395,5.66
		L88.124,70.841z"/>
                <path fill="#43647E" d="M47.633,89.838l18.79,7.959c0.033,0.012,0.07,0.021,0.104,0.032c0.818-2.786,1.901-5.485,3.234-8.061
		l-18.74-7.935c-2.209-0.937-4.761,0.098-5.696,2.308C44.388,86.354,45.423,88.904,47.633,89.838z"/>
                <path fill="#43647E" d="M149.397,88.874c0.821,1.508,1.576,3.074,2.236,4.705c0.439,1.088,0.821,2.183,1.171,3.284l18.862-7.638
		c2.226-0.902,3.299-3.437,2.398-5.661c-0.901-2.224-3.437-3.299-5.661-2.398l-18.916,7.66
		C149.458,88.837,149.43,88.859,149.397,88.874z"/>
                <path fill="#43647E" d="M81.135,169.308c-0.937,2.21,0.097,4.761,2.308,5.696c1.105,0.469,2.295,0.445,3.324,0.027
		c1.034-0.418,1.905-1.229,2.371-2.334l7.959-18.789c0.016-0.035,0.023-0.071,0.037-0.104c-2.787-0.818-5.488-1.901-8.065-3.233
		L81.135,169.308z"/>
                <path fill="#43647E" d="M131.503,150.19c-0.012-0.033-0.031-0.062-0.047-0.093c-1.508,0.822-3.074,1.574-4.704,2.238
		c-1.089,0.439-2.185,0.82-3.284,1.17l7.639,18.863c0.901,2.225,3.436,3.297,5.662,2.395c2.223-0.901,3.297-3.434,2.397-5.659
		L131.503,150.19z"/>
                <path fill="#43647E" d="M70.233,132.157c-0.824-1.51-1.578-3.074-2.238-4.707c-0.441-1.085-0.821-2.183-1.171-3.282l-18.862,7.641
		c-2.225,0.899-3.297,3.436-2.396,5.658c0.9,2.227,3.435,3.299,5.66,2.398l18.914-7.66C70.173,132.191,70.2,132.172,70.233,132.157z
		"/>
                <path fill="#43647E" d="M171.997,131.191l-18.791-7.959c-0.033-0.014-0.068-0.02-0.104-0.033c-0.818,2.786-1.9,5.484-3.234,8.062
		l18.739,7.936c1.104,0.467,2.295,0.443,3.327,0.025c1.029-0.417,1.902-1.228,2.371-2.334
		C175.24,134.678,174.207,132.127,171.997,131.191z"/>
            </g>
            <g className="sunny-body">
                <path fill="#43647E" d="M142.702,97.196c-7.357-18.162-28.043-26.923-46.205-19.568c-18.164,7.356-26.925,28.045-19.568,46.205
	c7.354,18.165,28.043,26.926,46.205,19.569C141.298,136.045,150.058,115.36,142.702,97.196z M117.348,84.979
	c-0.411,1.812-2.217,2.948-4.026,2.535c-4.427-1.007-8.997-0.636-13.221,1.075c-5.488,2.224-9.782,6.45-12.091,11.9
	c-2.308,5.452-2.356,11.475-0.134,16.964c0.697,1.721-0.134,3.684-1.857,4.381c-0.413,0.168-0.841,0.248-1.262,0.248
	c-1.33,0-2.588-0.795-3.117-2.104c-2.898-7.154-2.836-15.008,0.174-22.113c3.007-7.108,8.605-12.619,15.76-15.516
	c5.504-2.229,11.469-2.715,17.241-1.398C116.626,81.363,117.762,83.167,117.348,84.979z"/>
            </g>
        </svg>
    )
}