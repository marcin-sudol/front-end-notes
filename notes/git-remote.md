### Managing remote repositories

Clone repository - create remote origin

```
git clone [url] [local_name]
```

List of remote repositories

```
git remote
git remote -v               // list with urls
```

Inspect remote

```
git remote show [remote]    // inspect remote
```

Add remote

```
git remote add [remote] [url]
```

Rename remote

```
git remote rename [remote] [new_remote]
```

Remove remote

```
git remote remove [remote]
```

### Working with remote

Download now work from remote

```
git fetch [remote]
git fetch --all                                   // fetch all remotes
```

Push branch to remote

```
git push [remote] [branch]
git push -u [remote] [branch]                     // with set-upstream option - local brand track remote branch
git push -u [remote] [branch]:[remote_branch]     // push branch to different name on remote
```

Create branch tracking remote branch

```
git branch [branch] [remote]/[remote_branch]      // remote branch can be different
git checkout -b [branch] [remote]/[remote_branch] // same as above, but with added checkout
git checkout --track [remote]/[branch]            // same as above, but local branch name is the same as remote
git checkout [branch]                             // same as above if branch doesn't exist locally, and exists on only one remote
```

Set tracking for branch

```
git branch -u [remote]/[branch]
```

Info about tracking branches

```
git branch -vv
```

Remove remote branch

```
git push [remote] -d [branch]
```

Download tracked branch and merge current branch with it. Remote branch need to be tracked by current branch

```
git pull
```
