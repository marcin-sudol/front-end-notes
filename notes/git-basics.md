### Setup

Configure Git

```
git config --global user.name "Marcin"
git config --global user.email marcin.sudol@outlook.com
```

List configuration

```
git config --list
```

Init local Git repository

```
git init
```

Create .gitignore

```
touch .gitignore
```

Add node_modules to .gitignore

```
echo "node_modules/" >> .gitignore
```

Optionally add other files to .gitignore
Optionally remove node_modules from Git

```
git rm -r --cached node_modules
```

### Staging, commiting changes

Stage changes (add files to index)

```
git add [filename]
git add .                          // add all changed files
```

Unstage changes

```
git reset HEAD [filename]
git reset HEAD .
git restore --staged [filename]    // newer command
```

Discard changes (revert to last commit)

```
git checkout -- [filename]
git restore [filename]             // newer command
```

Commit changes

```
git commit
git commit -m 'Description'
```

Commit with staging all changed files

```
git commit -a -m 'Description'
```

Update (replace) last commit

```
git commit --amend
```

Remove file from Git and directory

```
git rm [filename]
```

Only remove file from Git

```
git rm --cached [filename]
```

Rename file

```
git mv [oldname] [newname]
```

Is equivalent to

```
mv mv [oldname] [newname]
git rm [oldname]
git add [newname]
```

### Branches

List branches

```
git branch
git branch -v
git branch --merged
git branch --no-merged
```

Create branch

```
git branch [branch]
```

Rename branch

```
git branch -m [newname]
git branch -m [oldname] [newname]
```

Change active branch

```
git checkout [branch]
```

Create new branch and switch to it

```
git checkout -b [branch]
```

Delete branch

```
git branch -d [branch]
```

### Merge

Merge branch - move master to that selected branch

```
git checkout master
git merge [branch]
```

Merge conflict

```
git status
```

Open and edit files with conflict

Check if all conflicts have been resolved

```
git status
```

Commit changes to that files (no need adding)

```
git commit -m 'Description'
```

Or use mergetool

### Rebase

Rebase current branch on top of master

```
git rebase master
```

Rebase any branch on top of master

```
git rebase master [branch]
```

Rebase onto
Takes commit whose parent is oldparent and sets its parent to newparent.

```
git rebase --onto [newparent] [oldparent]
git rebase --onto [newparent] [oldparent] [until]
```

### Other

Tagging

```
git tag
git tag -a v1.0 -m "Description"                // add tag to last checkout
git tag -a v1.0 -m "Description" [commit]       // add to previous checkout
git show v1.0                                   // show tag
git tag -d v1.0                                 // remove tag
```

Create alias

```
git config --global alias.lo 'log --oneline --decorate --graph --all'
```

Status

```
git status
git statis -s
```

Diff

```
git diff                                        // compare current state to staging
git diff --staged                               // compare staging to last commit
```

Log

```
git log
git log --all                                   // show all branches
git log -p
git log --stat
git log --pretty=oneline
git log --pretty=format:"%h - %an, %ar : %s"
git log --pretty=format:"%h %s" --graph
git log --oneline --decorate --graph --all      // all branches history
git log --since=2.weeks
git log -S [function_name]
git log -- [filepath]
```
