# Application to Determine the Best Location for Certain Plants
## Vision
The basic goal of this application is to provide a medium for which users can easily figure out the best location and time of year to plant certain crops. The target audience for this application is beginner or expert gardeners who want to find the best location to plant certain crops, or find which crops grow best in their area. This application can even be useful for non-gardeners who are just curious or want to have fun seeing which plants grow best where. 

Going into a little more detail, this product will be able to do a couple of basic things. The first thing it can do is take a location input from the user and output a list of which crops grow best in that area. The user can then find a specific crop they are looking for and get more details about it, such as the season to grow them in, how much water they need, and how long they need to grow for. The second thing a user should be able to do is search for a specific plant and receive and output of which locations around the world provide the best environment for growing the plants.

Those are the main things the application will be able to do. However, as the product is developed, there may be more details added to the product to make it more versatile. For example, another nice feature of the product would be to have an admin role that can create their own custom plants for users to be able to analyze, or an interactive map for users to be able to input the location of interest. However, features like these will not be implemented until the basic functionality is down.

Ideally, this product would be a quick and convenient way for a gardener to figure out everything they need to know about growing a certain plant in their area without having to do any external research. Many potential alternatives to this product may provide a couple of things that this application provides, but it doesn't cover anything. This application should be the only thing a person needs to start growing their desired plants. That is what makes this product worth developing.

## Software Architecture
The product will consist of a front end application to handle the visuals and the initial inputs and outputs, and a back end application to handle all of the data being passed.

For the basic front-end application, it will contain an input area to enter your location or the desired plant you are interested in. More inputs will be added as the product is developed, such as an option to select the desired season you are interested in. The option to enter location data will also come with an interactive map in the future to selest your desired location. The user will then press a button and the input data will be transferred to the back end application. The back end application will interpret the input data and send the desired output data, whether it be location data or plant data, back to the front end application. Finally, the fron end application will display the output data in whatever context is specified.

There are two main data items that will need to be stored. The first is the location data. Every location stored will be associated with their average weather conditions depending on the time of year, such as precipitation, temperature, and humidity. We plan on obtaining this data using a weather API[^1]. The other data item that needs stored and accessed is a list of plants that the user may be interested in. Each plant will come with its own data, such as a description, how long it takes to grow, how much water they need, and ideal conditions for growing. This will hopefully help in associating a plant to ideal locations.

While we haven't fully committed to any languages, we were thinking of using the REACT Web Framework[^2] for the front end and .NET Framework using C#[^3] for the back end. For data storage, we might use SQL Server[^4] or something else. This is subject to change as we might decide to change languages before we start development.

## Challenges and Risks
The main challenge we see in developing this application is being able to obtain the data that we need to go through with this project. Ideally, we can find such data online an import it to our database, but that might not be an option. If we need to, we can input all of the data manually to achieve our desired data. Another challenge will be passing in the data between the front end and back end, as establishing a connection between the two parts could be difficult. In order to make this as simple as possible, we will need to do a lot of research beforehand to figure out how to do these things.

[^1]: Weather API Possibilities: [Free Weather API](https://www.weatherapi.com/), [National Weather Service](https://www.weather.gov/documentation/services-web-api)
[^2]: [REACT Framework](https://reactjs.org/)
[^3]: [.NET Framework](https://dotnet.microsoft.com/en-us/learn/dotnet/what-is-dotnet)
[^4]: [SQL Server](https://www.microsoft.com/en-us/sql-server/sql-server-downloads)
