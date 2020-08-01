# Github issue manager

React app that uses the github API to display repository issues. For each issue associated with a given repository, the title and, if they exist, body and labels associated with that issue are diaplyed. A complete list of the selected repositories labels are also displayed. For each label, an appropriately contrasting text color is assigned based on its background color.

## Usage

By default the app is set to display the issues of *this repository*. To change repository enter the repo name into the searchbar and hit enter. The syntax is:

````markdown
<username/repository>
````

For example:

````markdown
niallpaterson/cleanup-react-app
````

## Known issues

1. Fetched message bodies are returned as markdown. The app uses the markdown-to-jsx npm package to convert the input to HTML, but this can lead to odd styling within the cards. See for example:

````markdown
cli/cli
````

Label bodies need to be styled to resolve each kind of odd styling.

2. The app is not currently fully responsive.

## Planned features

Planned featues incldue:

1. Searchbar dynamically searches for best matches uses the github API search feature. At present this feature causes rate exceeding, which causes the app to crash. This needs to be resolved before dynamic search can be implemented. 

2. Once issues are displayed, they can be filtered by name and/or label.
