var tipuesearch = {"pages": [{'title': 'About', 'text': '課程名稱: 網際內容管理 - Web Content Management \n 學員作業網站:  https://mdewcm2025.github.io/hw-41323104/content/index.html \n 學員作業倉儲: \xa0https://github.com/mdewcm2025/hw-HYCCC41323104 \n \n 課程代號: wcm2025 \n Teams 線上教學: \n 以 "學號@nfu.edu.tw" 登入 \xa0 https://login.microsoftonline.com/ \xa0 Office 365 \n Teams 團隊代碼:\xa0 87b7bbx \n \n 課程評分: \n 1. 作業 (40%): 從 Github Classroom 取得的個人倉儲與網站, 每週必須至少提交 2 次與課程進度有關的內容. \n 作業一 (20%): 採用  nginx  建立全球資訊網伺服器 \n 在 Windows 操作系統中建立一台 WWW 伺服器 \n 在 Ubuntu 操作系統建立一台 WWW 伺服器 \n 在 虛擬主機上建立一台 WWW 伺服器 (Windows and Ubuntu) \n Virtualbox \n Vmware  最近宣布 適用於 Windows 及 Linux 的 Vmware Workstation Pro ( 17.6 ), 與適用於 MacOS 的 Vmware Fusion Pro 全面免費. \n 下載 Vmware Workstation Pro  (For Windows and Linux) - 註冊帳號後下載 VMware-workstation-full-17.6.2.exe \n 下載 Vmware Fusion Pro  (For Mac) - 註冊帳號後下載 \n 作業二 (20%): 在各種不同環境下的操作系統中配置  Reeborg\'s world \xa0( 原始碼 ) \n 2. 期中協同專案執行、簡報與報告 (三人一組) (30%) \n 專案題目: 利用 Copilot 解析  Reeborg\'s world \xa0( 原始碼 ) \n 3. 期末協同專案執行、簡報與報告\xa0(三人一組) (30%) \n 專案題目: 網際內容管理架構下的  Reeborg\'s world \xa0( 原始碼 ) \n 利用 uwsgi 配置分組學員執行 cmsimde 動態內容管理系統編輯 \n 設法將  Reeborg\'s world \xa0( 原始碼 ) 與 cmsimde 網際內容管理系統整合 \n', 'tags': '', 'url': 'About.html'}, {'title': 'Task', 'text': '', 'tags': '', 'url': 'Task.html'}, {'title': 'task1', 'text': '自行製作可攜程式系統 \n 此作業的目的在展示如何利用既有的 Python 可攜系統建立各版本的 Python 可攜環境. \n 以下為操作步驟: \n \n 下載 \xa0 portable_python311.7z , 展開後是一套尚未安裝 pip 的 Python 3.11 可攜程式環境. \n 雙點擊 portable_python311 目錄中的 start_ipv6.bat 啟動可攜系統, 在 SciTE 中開啟 Y:\\ gen_python313.py , 以下拉式功能表 Tools - Go 執行, 便可在 Y:\\ 建立 Python313 目錄. \n 接著修改 start_ipv6.bat, 利用 Search - Replace, Find 欄位填上 Python311, Replace 欄位填上 Python313 後, 按下 Replace All, 便可將啟動檔中所有 Python311 設定改為 Python313, 另存修改後的檔案為 start_python313.bat. \n 接下來以 stop.bat 關閉 start_ipv6.bat 開啟的可攜系統, 改以心建立的 start_python313.bat 開啟可攜環境, 之後在命令列輸入 python, 確認目前的 Python 版本為 3.13.2 後, 利用 Ctrl + z 退出 Python 後, 利用 pip list 確認目前的 Python 3.13.2 系統尚未配置 pip 模組管理工具. \n 在命令列中, 以 python get-pip.py 安裝 pip 工具, 完成後, 以 pip list 確認 pip.exe 已經配置完成. \n 最後在命令列中, 以 pip install flask flask_cors bs4 lxml pelican markdown 安裝 cmsimde 網際內容管理系統啟動所需的 Python 模組後, 此可攜系統中的 Python 3.13.2 套件已經可以用來維護個人作業倉儲與分組倉儲. \n 之後利用新版的 \xa0 SciTE , \xa0 Portablegit , \xa0 PUTTY , \xa0 ShareX , \xa0 Wink , \xa0 Solvespace , \xa0 Zoomit , \xa0 ProcessExplorer \xa0 以及原有的 tmp 及 home_ipv6, 以新的 start_python313 啟動. \n \n 以下為操作影片:', 'tags': '', 'url': 'task1.html'}, {'title': 'task2', 'text': '使用 SSH 協定執行作業倉儲的推送 \n SSH \xa0 是一種加密的網路傳輸協定, PuTTY 則是可用於 Windows 環境的 SSH 協定工具, 其中支援遠端登入 (putty.exe) 與檔案傳輸工具 (psftp.exe). \n 使用 PuTTY 所建立的公私鑰進行 Github push 認證的步驟: \n 第一步: \n 若希望在 Windows 環境透過 git 指令, 使用 PuTTY 設定的 session (一個代表連線伺服器主機、私鑰位置與是否使用代理主機等資訊的字串), 執行 push, 必須要在啟動可攜環境時, 設定 GIT_SSH 環境變數, 將此變數指向 PuTTY 套件中的 plink.exe 位置 (也就是 set GIT_SSH=%Disk%:\\putty\\plink.exe). \n 第二步: \n 指定利用 PuTTY 的 SSH session 執行 git push 後, 必須在 Windows 操作系統中選擇一個字串, 作為 SSH 連線 session 名稱, 由於此設定必須指向 SSH 協定加密用的私鑰所在目錄位置, 因此設定 session 之前, 必須利用 puttygen.txt 建立一對公私鑰, 其中的公鑰為 OpenSSH 格式, 必須送到使用者 Github 帳號設定區 (Settings) 的 SSH and GPG keys 中. \n 第三步: \n 利用 puttygen.exe 建立公私鑰的方法, 是在執行 puttygen.exe 之後, 以滑鼠按下 Generate 之後, 讓滑鼠在 puttgen.exe 視窗中 key 下方的空白區域隨意移動, puttygen.exe 會根據滑鼠移動的位置隨機建立 OpenSSH 格式的公鑰, 以及配對的 PuTTY 格式的 Private Key (副檔名為 .ppk) \n 第四步: \n 接下來, 將 OpenSSH 格式的 Public Key 內容複製到個人 Github 帳號設定區的 SSH and GPG keys 中, 並以 puttygen.exe 執行視窗右下方的 Save private key 按鈕, 將私鑰 (假設為 myprivatekey.ppk) 存至 Y:\\. \n 第五步: \n 接著啟動 PuTTY 中的 putty.exe, 在 Host Name (or IP Address) 欄位填入 github.com, 並確認 Connection Type 選用 SSH, 表示要透過 SSH 加密協定連線到 github.com. \n 第六步: \n 接著在 putty.exe 視窗下方的 Saved Sessions 填入一組字串, 此字串就是之後要遠端登入 github.com 設定 push 連線 URL 的 session 名稱, 在此假設選擇 "mysession" 作為 session 名稱, 使用者可以自行選擇具有代表性的字串, 例如: 學號或簡短的英文姓名縮寫. \n 第七步: \n 在 putty.exe 視窗中填入 github.com 與 "mysession" 名稱之後, 點擊 Save 之後, 此 session 設定就會被 Windows 操作系統存入該台電腦的 Registry 登錄檔案中的 HKEY_CURRENT_USER - SOFTWARE - SimonTatham 所在組態區. 此時可以在命令列中輸入 regedit 後進入登錄檔查看是否 mysession 已經存在. \n 第八步: \n 上列 "mysession" 設定完成且按下 Save 之後, 若再按下 Open, 採用 IPv4 網路連線的電腦應該已經可以透過 putty.exe 遠端連線至 github.com, 視窗中會出現 github.com 作為視窗標題, 且內容為 login as: 但一般使用者並沒有帳號可以直接透過 putty.exe 遠端登入到 github.com, 而只能在 session 設定完成後, 利用此 session 執行 git push. \n 第九步: \n 由於前面的 "mysession" 雖然已經存入 Windows 操作系統的登錄檔, 但並沒有設定 private key 的位置, 因此接下來要再開啟 putty.exe, load 進此一 session, 然後在此 session 設定左方的 Category: 下方的 Connection - SSH - Auth - Credentials 設定中的 Private key file for authentication: 區, 利用 Browse 選擇位於 Y:\\ 的 myprivatekey.ppk 檔案. 選擇檔案完成後, 必須再回到 Catetory: 下方的 Session 區, 以右方的 Save 將附加私鑰位置設定的 session 存檔. 此時 Windows 登錄檔中的 "mysession" 除了代表要使用 SSH 連線到 github.com 之外, 還附帶指定了 myprivatekey.ppk 在 Y:\\ 的位置. \n 第十步: \n 若上述設定是在電腦輔助設計室中的電腦進行, 必須利用命令列 regedit 指令, 進入 HKEY_CURRENT_USER - SOFTWARE - SimonTatham 位置, 利用滑鼠右鍵將此登錄設定檔案"匯出" 存入可攜程式 start_ipv6.bat 所在目錄, 此處假設命名為 mysession.reg, 使用者可以自行對 .reg 命名. \n 第十一步: \n 由於上列的 myprivatekey.ppk 存於可攜程式中的 Y:\\, 因此當使用者利用 start_ipv6.bat 啟動可攜程式後, 就可以利用滑鼠雙點擊位於同目錄的 mysession.reg, 上述的 "mysession" 設定就會存入 Windows 操作系統的登錄檔中. \n 使用 PuTTY session 設定倉儲 .git/config 中的 URL \n 假設上列 "mysession" 對應中的 OpenSSH 格式公鑰是送到 Github 帳號為 scrum-1 學員的 SSH and GPG key 區域, 則 scrum-1 學員在啟動可攜系統後, 已經雙點擊 mysession.reg, 將前述 putty.exe 設定的 session 組態登錄設定回存至 Windows 操作系統中, 則 scrum-1 學員就可以將其近端作業倉儲中的 mysession 用於倉儲 .git/config 檔案的下方設定: \n \n \n \n \n \n \n 1 \n 2 \n 3 \n \n \n \n [remote  "origin" ] \n \xa0\xa0\xa0\xa0 url = git@mysession:mdewcm2025/hw-scrum-1.git \n \xa0\xa0\xa0\xa0 fetch = +refs/heads/:refs/remotes/origin/ \n \n \n \n \n \n \n \n 其中的 [remote "origin"] 表示當使用 git 指令中針對此倉儲 "origin" 是一個與遠端倉儲對應的字串代號, 代表其下兩項設定. url 代表此 "origin" 的倉儲連線網址, 而連線至此倉儲的協定是採遠端登入 (使用 Github 支援的 SSH 遠端登入協定), 且此遠端登入的帳號為 "git", 這是所有要使用 SSH 執行 git push 的用戶共同使用的登入帳號. \n url 設定中 "@" 之後的 "mysession" 就是宣告要使用此電腦登錄檔中所設定的 session 名稱 (代表要連線到 github.com, 且帶的 myprivatekey.ppk, 準備在登入流程中與 github.com 中 mdewcm2025 帳號下的 hw-scrum-1 倉儲擁有者 (或帶有 repo 管理權限的帳號) 所登錄的 public keys 進行認證比對, 一旦通過認證, git push 指令就可以成功將改版資料推送到指定的倉儲區域.', 'tags': '', 'url': 'task2.html'}, {'title': 'task2.5', 'text': '', 'tags': '', 'url': 'task2.5.html'}, {'title': 'task3', 'text': '', 'tags': '', 'url': 'task3.html'}, {'title': 'task4', 'text': '', 'tags': '', 'url': 'task4.html'}, {'title': 'Homework', 'text': "1. 作業 (40%): 從 Github Classroom 取得的個人倉儲與網站, 每週必須至少提交 2 次與課程進度有關的內容. \n 作業一 (20%): 採用  nginx  建立全球資訊網伺服器 \n 在 Windows 操作系統中建立一台 WWW 伺服器 \n 在 Ubuntu 操作系統建立一台 WWW 伺服器 \n 在 虛擬主機上建立一台 WWW 伺服器 (Windows and Ubuntu) \n Virtualbox \n Vmware  最近宣布 適用於 Windows 及 Linux 的 Vmware Workstation Pro ( 17.6 ), 與適用於 MacOS 的 Vmware Fusion Pro 全面免費. \n 下載 Vmware Workstation Pro  (For Windows and Linux) - 註冊帳號後下載 VMware-workstation-full-17.6.2.exe \n 下載 Vmware Fusion Pro  (For Mac) - 註冊帳號後下載 \n 作業二 (20%): 在各種不同環境下的操作系統中配置  Reeborg's world \xa0( 原始碼 ) \n", 'tags': '', 'url': 'Homework.html'}, {'title': 'HW1', 'text': '作業一 (20%): 採用  nginx  建立全球資訊網伺服器 \n 在 Windows 操作系統中建立一台 WWW 伺服器 \n 在 Ubuntu 操作系統建立一台 WWW 伺服器 \n 在 虛擬主機上建立一台 WWW 伺服器 (Windows and Ubuntu) \n Virtualbox \n Vmware  最近宣布 適用於 Windows 及 Linux 的 Vmware Workstation Pro ( 17.6 ), 與適用於 MacOS 的 Vmware Fusion Pro 全面免費. \n 下載 Vmware Workstation Pro  (For Windows and Linux) - 註冊帳號後下載 VMware-workstation-full-17.6.2.exe \n 下載 Vmware Fusion Pro  (For Mac) - 註冊帳號後下載 \n', 'tags': '', 'url': 'HW1.html'}, {'title': 'HW2', 'text': "作業二 (20%): 在各種不同環境下的操作系統中配置  Reeborg's world \xa0( 原始碼 ) \n", 'tags': '', 'url': 'HW2.html'}, {'title': 'Midterm', 'text': "2. 期中協同專案執行、簡報與報告 (三人一組) (30%) \n 專案題目: 利用 Copilot 解析  Reeborg's world \xa0( 原始碼 ) \n", 'tags': '', 'url': 'Midterm.html'}, {'title': 'Final', 'text': "3. 期末協同專案執行、簡報與報告\xa0(三人一組) (30%) \n 專案題目: 網際內容管理架構下的  Reeborg's world \xa0( 原始碼 ) \n 利用 uwsgi 配置分組學員執行 cmsimde 動態內容管理系統編輯 \n 設法將  Reeborg's world \xa0( 原始碼 ) 與 cmsimde 網際內容管理系統整合", 'tags': '', 'url': 'Final.html'}]};