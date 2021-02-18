### CLONE REPOSITORY - CREATE REMOTE ORIGIN

```
git clone [url] [local_name]
```

### LIST OF REMOTE REPOSITORIES

```
git remote
git remote -v               // list with urls
```

### INSPECT REMOTE

```
git remote show [remote]    // inspect remote
```

### ADD REMOTE

```
git remote add [remote] [url]
```

### RENAME REMOTE

```
git remote rename [remote] [new_remote]
```

### REMOVE REMOTE

```
git remote remove [remote]
```

### DOWNLOAD NEW WORK FROM REMOTE

```
git fetch [remote]
git fetch --all                                   // fetch all remotes
```

### PUSH BRANCH TO REMOTE

```
git push [remote] [branch]
git push -u [remote] [branch]                     // with set-upstream option - local brand track remote branch
git push -u [remote] [branch]:[remote_branch]     // push branch to different name on remote
```

### CREATE BRANCH TRACKING REMOTE BRANCH

```
git branch [branch] [remote]/[remote_branch]      // remote branch can be different
git checkout -b [branch] [remote]/[remote_branch] // same as above, but with added checkout
git checkout --track [remote]/[branch]            // same as above, but local branch name is the same as remote
git checkout [branch]                             // same as above if branch doesn't exist locally, and exists on only one remote
```

### SET TRACKING FOR BRANCH

```
git branch -u [remote]/[branch]
```

### INFO ABOUT TRACKING BRANCHES

```
git branch -vv
```

### REMOVE REMOTE BRANCH

```
git push [remote] -d [branch]
```

### DOWNLOAD TRACKED BRANCH, AND MERGE CURRENT BRANCH WITH IT

REMOTE BRANCH NEED TO BE TRACKED BY CURRENT BRANCH

```
git pull
```
