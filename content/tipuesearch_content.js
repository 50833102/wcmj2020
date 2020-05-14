var tipuesearch = {"pages": [{'title': 'Old Stuff', 'text': '這裡放的是網站原本的內容 \n \n', 'tags': '', 'url': 'Old Stuff.html'}, {'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數. \n \n', 'tags': '', 'url': 'Develop.html'}, {'title': 'progress rate', 'text': '', 'tags': '', 'url': 'progress rate.html'}, {'title': 'w5', 'text': '哈哈一開始完全不明白呢，莫名其妙亂記一堆，還有感謝萬同學提供的照片 \n \n', 'tags': '', 'url': 'w5.html'}, {'title': 'w6', 'text': '這次記了不少，但要再整理一陣子，主要是名詞或指令不熟，但筆記稍微整理了一下。 \n 重點是稍微理解GitHub的運作了，就是打包帶著走，隨時修，隨時看，有網路了再上傳的感覺吧? \n \n', 'tags': '', 'url': 'w6.html'}, {'title': 'w7', 'text': '喔喔喔喔喔! \n 雖然上課的時候沒有做好但回家之後用筆電成功了! 筆記整理後大概如下: \n 1 建立一個倉儲(公開) \n 2 Setting中設為master branch \n 3 clone 網址到隨身碟( https://127.0.0.1:9443 這種，上一步產生的) \n *網站有了，增加內容 \n 4再資料夾(tmp)中建(wcmj2020) \n 5 git clone 這個網址 \n \n 6 cd wcmj2020\xa0 \n 7 git submodule add  https://github.com/mdecourse/cmsimde.git \xa0cmsimde \n 8到資料夾，找到up_dir，把內容Ctrl A到wcmj2020 \n (第9步起就是更改網頁) \n 9 python wsgi.py (啟動python之術!!!) \n 10然後複製因為前一步產生的新網址，Ctrl C到古歌看看 \n 11修改後一定要記得generate page \n (回到cmd) \n 12 cd.. \n 13 git add . (add和點點中間一定要記得空白) \n 14 git commit -m "你要附註的東西" \n 15 git push \n --------喔喔喔喔喔喔打完了!!! \n 附上一張肝了十分鐘的心情圖 \n \n \n', 'tags': '', 'url': 'w7.html'}, {'title': 'w8', 'text': '結果原來一開始就忘記下載wcm2020了，難怪path那麼複雜。 \n 結果不小心把筆電忘在電腦教室了，雖然很驚險，但因大禍賺到的小福利是， \n 可以直接在家用別的電腦測試新裝的工具包， \n 既然我現在在打這段，應該表示這是成功的。 \n \n', 'tags': '', 'url': 'w8.html'}, {'title': 'w9', 'text': '網管課程頻道: \n https://www.youtube.com/channel/UCJ0Ye3mhMApH0yxAcwCXs5g/videos \n \n 建立github帳號和在近端的連接: \n https://www.youtube.com/watch?v=_ByMGeN_014 \n \n 詳細操作: \n 見W7 \n \n 原理: \n W6 \n \n *學期上半詳解見第九週實習 \n \n', 'tags': '', 'url': 'w9.html'}, {'title': 'w10', 'text': '今天主要是關於public key 和 private key 的教學 \n 1 使用putty 創建一個key (putty 可以在 Y 槽找到) \n 2 選擇要public 還是private \n 3 儲存到 \n 3 打開黑色指令視窗 \n 4 打sh (對，只要sh) \n \n 5 打ssh-keygen -t rsa -b 4096 -c "密碼名" \n 6 接下來會問你要不要為它設密碼，Enter就好 \n 7 出現Enter file in which to save the key (/y/home/.ssh/id_rsa): \n \xa0 \xa0打/y/keys/id_rsa \n \xa0 \xa0y=y槽；keys是 \n \n *要出去那個彩色區域要打  exit  !! \n (我解鎖色彩功能了!!!) \n (git push 如果卡住((y/n那裏))，開putty連github.com，成功後再git push) \n \n \n', 'tags': '', 'url': 'w10.html'}, {'title': '第九週實習', 'text': '\n', 'tags': '', 'url': '第九週實習.html'}, {'title': '電腦軟硬體簡介', 'text': '\n 壹. 電腦本身 \n 電腦是一種電子設備，可以接收指令(=input)加以處理、發送訊息(=output)、存儲訊息。 \n \n (這兩本一樣來著www) \n \n 電腦的等級分類: \n 1\xa0 超級電腦(supercomputer) \n -多用戶 -最快，當然也超貴 -一秒能執行億筆運算\xa0 \n 2\xa0 大型電腦(mainframe) \n -多用戶\xa0 -雖然比超級電腦慢，但還是很快(貴) -同時支持幾百至幾千用戶 \n 3\xa0 迷你電腦(Minicomputer) \n -多用戶\xa0 -也不錯，而且主機不用冷氣環境 - 同時支持幾十至幾百用戶 \n 4 工作站(Workstation) \n -單用戶\xa0- 功能完善的個人電腦 \n 5 微電腦(Microcomputer) \n -單用戶 -有顯示器有鍵盤也能儲存資料，筆電就這個等級 \n \n \xa0 \n 貳. 硬體=hardware \n 電腦可觸碰的有形計算機組件 \n ex: \n 1.  輸入設備 (input devices) \n - 提供數據 、 信號-ex \n \n 2.  中央處理器 (Central Processing Unit = CPU) \n -電腦 的腦袋，負責所有計算功能，執行儲存指令 \n \xa0 \xa0 \xa0 -CPU三部分: \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0(1) 算術邏輯單元(Arithmetic Logic Unit = ALU) \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0-主要功能是進行二進位的算術運算和比較，CPU的主要計算元件 \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0(2)\xa0 控制單元 (Control Unit = CU) \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0-閱讀執行指令 、讀取內存，提供數據給ALU \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0(3) 暫存器 （ Register ） \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0-如名，暫時性的儲存資料和指令，讀取速度快，空間不大，算是中繼站 \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \n 3.  記憶體 (Primary＆Secondary) \n - Primary \n \xa0 \xa0 \xa0\xa0(1)隨機存取記憶體 RAM( =\xa0Random Access Memory) \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 -可暫時保存資料、隨時讀寫，速度很快，但一斷電什麼都沒了 \n \xa0 \xa0 \xa0\xa0(2)唯讀記憶體 \xa0 ROM( = Read Only Memory) \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0\xa0-只能讀取資料，將資料燒進線路中，寫入不能更改 \n -Secondary(CPU 不能直接存取) \n \xa0 \xa0 \xa0\xa0(1)硬碟 HDD(=H ard D isk D rive) \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 -可暫快速儲存大量資料，但是是ROM \n \xa0 \xa0 \xa0\xa0(2)光碟 CD(=compact disc ) \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 -是ROM \n \xa0 \xa0 \xa0\xa0(3)隨身碟 (=flash disk ) \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 -同上 \n \n 1. \xa0 輸入設備 (input devices) \n -輸出 數據 、 信號-ex \n \n \xa0 \n \xa0 \n 叁. 軟體=software \n 電腦不可觸碰的無形組件 \n \n 1 系統軟件 (System software) \n -控制、搜尋、管理個別硬體-ex:程式語言 \n \n 2 應用軟件 (Application software) \n -完成特定任務、 指令，ex:圖像處理器、瀏覽器 \n \n \n \n \n', 'tags': '', 'url': '電腦軟硬體簡介.html'}, {'title': '網路架構與設定簡介', 'text': '\n 網路是什麼? \n 利用有限(ex 乙太)或無線(ex wifi)的方式將不同主機、機器共享資訊的方法。 \n \n 網路的分類? \n \n \n 1 在學校的型式 (Network in a school) \n 不同電腦、引表機、所有設備連接再一起 \n \n 2  對等式網路 （peer-to-peer=P2P） \n -基本上連接會小於十台電腦，所有電腦會平等的共享資訊和設備 \n \n 3  客戶端/伺服器架構 (Client/server networks) \n 有"用戶端"和"伺服端"，用戶端是上網的電腦(或手機等)，伺服端可視作一部有龐大資料(網頁、軟體網路架構等)的電腦 \n \n \n 網路的要素? \n 1 至少有兩台以上的電腦 \n 2 有將電纜將一個個電腦(或其他機器)串起，現在無線也算 \n 3 每台電腦上的網路連接設備(NIC) \n 4 一個能切換數據的"開關"(但已逐漸過時) \n 5 支援提供網路連接的軟體 \n \n 什麼是IP位址? \n 就當成是幫要連接定位的事物(網頁、電腦、印表機等)取的名字方便定位 \n \n 什麼是Proxy? \n 即是代理伺服器，可以幫兩部主機進行非直接的連線，具備保護功能 \n \n', 'tags': '', 'url': '網路架構與設定簡介.html'}]};