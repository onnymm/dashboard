export const chartElementsStyling = {
    plugins: {
        htmlLegend: {
            type: "externalElement",
            idKey: "containerID",
            elements: [
                {
                    element: "ul",
                    styling: "hola",
                    children: [
                        {
                            element: "li",
                            styling: "adios",
                            children: [
                                {
                                    element: "span",
                                    styling: "comoesta",
                                },
                                {
                                    element: "p",
                                    styling: "nohacenada"
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    }
}