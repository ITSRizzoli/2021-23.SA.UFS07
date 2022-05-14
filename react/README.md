# React 101

## Configure remote upstream to fetch all branches

Check if your _upstream_ is configured to fetch only the master branch

`git config  --get remote.upstream.fetch`

compared to your _origin_ is configured

`git config  --get remote.origin.fetch`

to set your _upstream_ to fetch all branches

`git config remote.upstream.fetch "+refs/heads/*:refs/remotes/upstream/*"`

this setting is persisted in the `.git/config` file.

## Fetch all upstream branches

`git fetch upstream` or right-click on upstream and fetch.

After that fetch you'll see a `react-101` branch under _upstream_.

## Start the tutorial

Right-click on the _oldest_ feat(react-101) commit and click _Cherry pick commit_.
