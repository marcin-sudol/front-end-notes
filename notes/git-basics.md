# SETUP

CONFIGURE GIT

```
git config --global user.name "Marcin"
git config --global user.email marcin.sudol@outlook.com
```

LIST CONFIGURATION

```
git config --list
```

INIT LOCAL GIT REPOSITORY

```
git init
```

CREATE .GITIGNORE

```
touch .gitignore
```

ADD NODE_MODULES TO .GITIGNORE

```
echo "node_modules/" >> .gitignore
```

OPTIONALLY ADD OTHER FILES TO .GITIGNORE

OPTIONALLY REMOVE MODE_MODULES FROM GIT

```
git rm -r --cached node_modules
```

---

# STAGING, COMMITING CHANGES

STAGE CHANGES (ADD FILES TO INDEX)

```
git add [filename]
git add .                          // add all changed files
```

UNSTAGE CHANGES

```
git reset HEAD [filename]
git reset HEAD .
git restore --staged [filename]    // newer command
```

DISCARD CHANGES (REVERT TO LAST COMMIT)

```
git checkout -- [filename]
git restore [filename]             // newer command
```

COMMIT CHANGES

```
git commit
git commit -m 'Description'
```

COMMIT WITH STAGING ALL CHANGED FILES

```
git commit -a -m 'Description'
```

UPDATE (REPLACE) LAST COMMIT

```
git commit --amend
```

REMOVE FILE FROM GIT AND DIRECTORY

```
git rm [filename]
```

ONLY REMOVE FILE FROM GIT

```
git rm --cached [filename]
```

RENAME FILE

```
git mv [oldname] [newname]
```

IS EQUIVALENT TO

```
mv mv [oldname] [newname]
git rm [oldname]
git add [newname]
```

---

# BRANCHING

LIST BRANCHES

```
git branch
git branch -v
git branch --merged
git branch --no-merged
```

CREATE BRANCH

```
git branch [branch]
```

RENAME BRANCH

```
git branch -m [newname]
git branch -m [oldname] [newname]
```

CHANGE ACTIVE BRANCH

```
git checkout [branch]
```

CREATE NEW BRANCH AND SWITCH TO IT

```
git checkout -b [branch]
```

DELETE BRANCH

```
git branch -d [branch]
```

MERGE BRANCH - MOVE MASTER TO THAT SELECTED BRANCH

```
git checkout master
git merge [branch]
```

MERGE CONFLICT

```
git status
```

OPEN AND EDIT FILES WITH CONFLICT

CHECK IF ALL CONFLICTS HAVE BEEN RESOLVED

```
git status
```

COMMIT CHANGES TO THAT FILES (NO NEED ADDING)

```
git commit -m 'Description'
```

OR USE MERGETOOL

REBASE

REBASE CURRENT BRANCH ON TOP OF MASTER

```
git rebase master
```

REBASE ANY BRANCH ON TO OF MASTER

```
git rebase master [branch]
```

REBASE ONTO

Takes commit whose parent is oldparent and sets its parent to newparent.

```
git rebase --onto [newparent] [oldparent]
git rebase --onto [newparent] [oldparent] [until]
```

---

# OTHER

TAGGING

```
git tag
git tag -a v1.0 -m "Description"                // add tag to last checkout
git tag -a v1.0 -m "Description" [commit]       // add to previous checkout
git show v1.0                                   // show tag
git tag -d v1.0                                 // remove tag
```

CREATE ALIAS

```
git config --global alias.lo 'log --oneline --decorate --graph --all'
```

STATUS

```
git status
git statis -s
```

DIFF

```
git diff                                        // compare current state to staging
git diff --staged                               // compare staging to last commit
```

LOG

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
