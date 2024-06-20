---
title: 使用Rclone将阿里云对象存储迁移至缤纷云S4对象存储
copyright: true
comment: true
mathjax: false
date: 2024-06-09 15:38:21
updated: 2024-06-09 15:38:21
tags:
  - 优化
  - 迁移
categories: 网站
keywords: 阿里云对象存储, 缤纷云S4对象存储,Rclone, 迁移, 优化,s4,对象存储,oss
permalink: transfer-oss-to-s4-by-rclone/
description:
---
主要原因是想省钱。。。
<!--more-->

## Rclone简介

Rclone 是一个用于和同步云平台同步文件和目录命令行工具。采用 Go 语言开发。

它允许在文件系统和云存储服务之间或在多个云存储服务之间访问和同步文件，它具有单向同步功能，使目录完全相同，它具有加密、缓存和联合后端，支持 Fuse 安装，并且可以通过 HTTP、WebDAV、FTP、SFTP服务本地或远程文件。

它支持超过 40 种不同的云存储服务，包括 Amazon S3, Google Drive, Dropbox, Microsoft OneDrive, Google Cloud Storage, Amazon Drive, OpenStack Swift, Backblaze B2, Yandex Disk, SFTP, WebDAV, FTP, SFTP, Minio, Wasabi, Alibaba OSS,, SwiftStack, Tencent COS, Wasabi, Yandex.Disk, Yandex.Files等等。

rclone 支持多种文件传输方式，包括复制，同步，移动，删除文件。它还支持文件加密和压缩，支持分块上传和分块下载，可以暂停和恢复传输，支持文件的校验和合并。

rclone 的主要优势在于它的灵活性和可扩展性。它可以用来做很多事情，包括备份，文件同步，数据迁移等。它可以在各种平台上运行，包括 Windows，macOS，Linux，FreeBSD，NetBSD 等。

rclone 的配置简单，可以使用命令行或者配置文件来配置。使用 rclone 可以非常方便的操作云存储，支持的命令也非常丰富，使用起来非常方便。

简单来讲，主要的功能如下：

- 将文件备份（和加密）到云存储
- 从云存储还原（和解密）文件
- 将云数据镜像到其他云服务或本地
- 将数据迁移到云，或在云存储供应商之间迁移
- 将多个、加密、缓存或不同的云存储挂载为磁盘
- 使用 lsf、ljson、size、ncdu 分析和核算云存储上保- 存的数据
- 将文件系统合并在一起，将多个本地和/或云文件系统呈现为一个

## 下载安装Rclone

Rclone官方下载地址：<https://rclone.org/downloads/>

本篇教程使用Mac版本，

```bash
sudo -v ; curl https://rclone.org/install.sh | sudo bash
```

安装完成后，查看版本：

```bash
❯ rclone --version
rclone v1.66.0
- os/version: darwin 14.4.1 (64 bit)
- os/kernel: 23.4.0 (arm64)
- os/type: darwin
- os/arch: arm64 (ARMv8 compatible)
- go/version: go1.22.1
- go/linking: dynamic
- go/tags: cmount
```

注意，brew安装的rclone可能版本过低，不推荐。

win版本同样可以在官网找到，<https://downloads.rclone.org/rclone-current-windows-amd64.zip>

## Rclone常用操作

```txt
rclone config - 以控制会话的形式添加rclone的配置，配置保存在.rclone.conf文件中。
rclone copy - 将文件从源复制到目的地址，跳过已复制完成的。
rclone sync - 将源数据同步到目的地址，只更新目的地址的数据。
rclone move - 将源数据移动到目的地址。
rclone delete - 删除指定路径下的文件内容。
rclone purge - 清空指定路径下所有文件数据。
rclone mkdir - 创建一个新目录。
rclone rmdir - 删除空目录。
rclone check - 检查源和目的地址数据是否匹配。
rclone ls - 列出指定路径下所有的文件以及文件大小和路径。
rclone lsd - 列出指定路径下所有的目录/容器/桶。
rclone lsl - 列出指定路径下所有文件以及修改时间、文件大小和路径。
rclone md5sum - 为指定路径下的所有文件产生一个md5sum文件。
rclone sha1sum - 为指定路径下的所有文件产生一个sha1sum文件。
rclone size - 获取指定路径下，文件内容的总大小。.
rclone version - 查看当前版本。
rclone cleanup - 清空remote。
rclone dedupe - 交互式查找重复文件，进行删除/重命名操作。
```

## 配置阿里云OSS

输入命令 `rclone config` 来进入交互式配置选项，进行添加、删除、管理对象存储等操作。

然后输入n来新建一个存储，按照提示输入对象存储的信息。

下面是我的配置信息，可作为参考：

```bash
❯ rclone config
No remotes found, make a new one?
n) New remote
s) Set configuration password
q) Quit config
n/s/q> n

Enter name for new remote.
name> oss

Option Storage.
Type of storage to configure.
Choose a number from below, or type in your own value.
 1 / 1Fichier
   \ (fichier)
 2 / Akamai NetStorage
   \ (netstorage)
 3 / Alias for an existing remote
   \ (alias)
 4 / Amazon S3 Compliant Storage Providers including AWS, Alibaba, ArvanCloud, Ceph, ChinaMobile, Cloudflare, DigitalOcean, Dreamhost, GCS, HuaweiOBS, IBMCOS, IDrive, IONOS, LyveCloud, Leviia, Liara, Linode, Minio, Netease, Petabox, RackCorp, Rclone, Scaleway, SeaweedFS, StackPath, Storj, Synology, TencentCOS, Wasabi, Qiniu and others
   \ (s3)
 5 / Backblaze B2
   \ (b2)
 6 / Better checksums for other remotes
   \ (hasher)
 7 / Box
   \ (box)
 8 / Cache a remote
   \ (cache)
 9 / Citrix Sharefile
   \ (sharefile)
10 / Combine several remotes into one
   \ (combine)
11 / Compress a remote
   \ (compress)
12 / Dropbox
   \ (dropbox)
13 / Encrypt/Decrypt a remote
   \ (crypt)
14 / Enterprise File Fabric
   \ (filefabric)
15 / FTP
   \ (ftp)
16 / Google Cloud Storage (this is not Google Drive)
   \ (google cloud storage)
17 / Google Drive
   \ (drive)
18 / Google Photos
   \ (google photos)
19 / HTTP
   \ (http)
20 / Hadoop distributed file system
   \ (hdfs)
21 / HiDrive
   \ (hidrive)
22 / ImageKit.io
   \ (imagekit)
23 / In memory object storage system.
   \ (memory)
24 / Internet Archive
   \ (internetarchive)
25 / Jottacloud
   \ (jottacloud)
26 / Koofr, Digi Storage and other Koofr-compatible storage providers
   \ (koofr)
27 / Linkbox
   \ (linkbox)
28 / Local Disk
   \ (local)
29 / Mail.ru Cloud
   \ (mailru)
30 / Mega
   \ (mega)
31 / Microsoft Azure Blob Storage
   \ (azureblob)
32 / Microsoft Azure Files
   \ (azurefiles)
33 / Microsoft OneDrive
   \ (onedrive)
34 / OpenDrive
   \ (opendrive)
35 / OpenStack Swift (Rackspace Cloud Files, Blomp Cloud Storage, Memset Memstore, OVH)
   \ (swift)
36 / Oracle Cloud Infrastructure Object Storage
   \ (oracleobjectstorage)
37 / Pcloud
   \ (pcloud)
38 / PikPak
   \ (pikpak)
39 / Proton Drive
   \ (protondrive)
40 / Put.io
   \ (putio)
41 / QingCloud Object Storage
   \ (qingstor)
42 / Quatrix by Maytech
   \ (quatrix)
43 / SMB / CIFS
   \ (smb)
44 / SSH/SFTP
   \ (sftp)
45 / Sia Decentralized Cloud
   \ (sia)
46 / Storj Decentralized Cloud Storage
   \ (storj)
47 / Sugarsync
   \ (sugarsync)
48 / Transparently chunk/split large files
   \ (chunker)
49 / Union merges the contents of several upstream fs
   \ (union)
50 / Uptobox
   \ (uptobox)
51 / WebDAV
   \ (webdav)
52 / Yandex Disk
   \ (yandex)
53 / Zoho
   \ (zoho)
54 / premiumize.me
   \ (premiumizeme)
55 / seafile
   \ (seafile)
Storage> 4

Option provider.
Choose your S3 provider.
Choose a number from below, or type in your own value.
Press Enter to leave empty.
 1 / Amazon Web Services (AWS) S3
   \ (AWS)
 2 / Alibaba Cloud Object Storage System (OSS) formerly Aliyun
   \ (Alibaba)
 3 / Arvan Cloud Object Storage (AOS)
   \ (ArvanCloud)
 4 / Ceph Object Storage
   \ (Ceph)
 5 / China Mobile Ecloud Elastic Object Storage (EOS)
   \ (ChinaMobile)
 6 / Cloudflare R2 Storage
   \ (Cloudflare)
 7 / DigitalOcean Spaces
   \ (DigitalOcean)
 8 / Dreamhost DreamObjects
   \ (Dreamhost)
 9 / Google Cloud Storage
   \ (GCS)
10 / Huawei Object Storage Service
   \ (HuaweiOBS)
11 / IBM COS S3
   \ (IBMCOS)
12 / IDrive e2
   \ (IDrive)
13 / IONOS Cloud
   \ (IONOS)
14 / Seagate Lyve Cloud
   \ (LyveCloud)
15 / Leviia Object Storage
   \ (Leviia)
16 / Liara Object Storage
   \ (Liara)
17 / Linode Object Storage
   \ (Linode)
18 / Minio Object Storage
   \ (Minio)
19 / Netease Object Storage (NOS)
   \ (Netease)
20 / Petabox Object Storage
   \ (Petabox)
21 / RackCorp Object Storage
   \ (RackCorp)
22 / Rclone S3 Server
   \ (Rclone)
23 / Scaleway Object Storage
   \ (Scaleway)
24 / SeaweedFS S3
   \ (SeaweedFS)
25 / StackPath Object Storage
   \ (StackPath)
26 / Storj (S3 Compatible Gateway)
   \ (Storj)
27 / Synology C2 Object Storage
   \ (Synology)
28 / Tencent Cloud Object Storage (COS)
   \ (TencentCOS)
29 / Wasabi Object Storage
   \ (Wasabi)
30 / Qiniu Object Storage (Kodo)
   \ (Qiniu)
31 / Any other S3 compatible provider
   \ (Other)
provider> 2

Option env_auth.
Get AWS credentials from runtime (environment variables or EC2/ECS meta data if no env vars).
Only applies if access_key_id and secret_access_key is blank.
Choose a number from below, or type in your own boolean value (true or false).
Press Enter for the default (false).
 1 / Enter AWS credentials in the next step.
   \ (false)
 2 / Get AWS credentials from the environment (env vars or IAM).
   \ (true)
env_auth> 1       

Option access_key_id.
AWS Access Key ID.
Leave blank for anonymous access or runtime credentials.
Enter a value. Press Enter to leave empty.
access_key_id> xxxxxxx

Option secret_access_key.
AWS Secret Access Key (password).
Leave blank for anonymous access or runtime credentials.
Enter a value. Press Enter to leave empty.
secret_access_key> xxxxxxx

Option endpoint.
Endpoint for OSS API.
Choose a number from below, or type in your own value.
Press Enter to leave empty.
 1 / Global Accelerate
   \ (oss-accelerate.aliyuncs.com)
 2 / Global Accelerate (outside mainland China)
   \ (oss-accelerate-overseas.aliyuncs.com)
 3 / East China 1 (Hangzhou)
   \ (oss-cn-hangzhou.aliyuncs.com)
 4 / East China 2 (Shanghai)
   \ (oss-cn-shanghai.aliyuncs.com)
 5 / North China 1 (Qingdao)
   \ (oss-cn-qingdao.aliyuncs.com)
 6 / North China 2 (Beijing)
   \ (oss-cn-beijing.aliyuncs.com)
 7 / North China 3 (Zhangjiakou)
   \ (oss-cn-zhangjiakou.aliyuncs.com)
 8 / North China 5 (Hohhot)
   \ (oss-cn-huhehaote.aliyuncs.com)
 9 / North China 6 (Ulanqab)
   \ (oss-cn-wulanchabu.aliyuncs.com)
10 / South China 1 (Shenzhen)
   \ (oss-cn-shenzhen.aliyuncs.com)
11 / South China 2 (Heyuan)
   \ (oss-cn-heyuan.aliyuncs.com)
12 / South China 3 (Guangzhou)
   \ (oss-cn-guangzhou.aliyuncs.com)
13 / West China 1 (Chengdu)
   \ (oss-cn-chengdu.aliyuncs.com)
14 / Hong Kong (Hong Kong)
   \ (oss-cn-hongkong.aliyuncs.com)
15 / US West 1 (Silicon Valley)
   \ (oss-us-west-1.aliyuncs.com)
16 / US East 1 (Virginia)
   \ (oss-us-east-1.aliyuncs.com)
17 / Southeast Asia Southeast 1 (Singapore)
   \ (oss-ap-southeast-1.aliyuncs.com)
18 / Asia Pacific Southeast 2 (Sydney)
   \ (oss-ap-southeast-2.aliyuncs.com)
19 / Southeast Asia Southeast 3 (Kuala Lumpur)
   \ (oss-ap-southeast-3.aliyuncs.com)
20 / Asia Pacific Southeast 5 (Jakarta)
   \ (oss-ap-southeast-5.aliyuncs.com)
21 / Asia Pacific Northeast 1 (Japan)
   \ (oss-ap-northeast-1.aliyuncs.com)
22 / Asia Pacific South 1 (Mumbai)
   \ (oss-ap-south-1.aliyuncs.com)
23 / Central Europe 1 (Frankfurt)
   \ (oss-eu-central-1.aliyuncs.com)
24 / West Europe (London)
   \ (oss-eu-west-1.aliyuncs.com)
25 / Middle East 1 (Dubai)
   \ (oss-me-east-1.aliyuncs.com)
endpoint> 13

Option acl.
Canned ACL used when creating buckets and storing or copying objects.
This ACL is used for creating objects and if bucket_acl isn't set, for creating buckets too.
For more info visit https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#canned-acl
Note that this ACL is applied when server-side copying objects as S3
doesn't copy the ACL from the source but rather writes a fresh one.
If the acl is an empty string then no X-Amz-Acl: header is added and
the default (private) will be used.
Choose a number from below, or type in your own value.
Press Enter to leave empty.
   / Owner gets FULL_CONTROL.
 1 | No one else has access rights (default).
   \ (private)
   / Owner gets FULL_CONTROL.
 2 | The AllUsers group gets READ access.
   \ (public-read)
   / Owner gets FULL_CONTROL.
 3 | The AllUsers group gets READ and WRITE access.
   | Granting this on a bucket is generally not recommended.
   \ (public-read-write)
   / Owner gets FULL_CONTROL.
 4 | The AuthenticatedUsers group gets READ access.
   \ (authenticated-read)
   / Object owner gets FULL_CONTROL.
 5 | Bucket owner gets READ access.
   | If you specify this canned ACL when creating a bucket, Amazon S3 ignores it.
   \ (bucket-owner-read)
   / Both the object owner and the bucket owner get FULL_CONTROL over the object.
 6 | If you specify this canned ACL when creating a bucket, Amazon S3 ignores it.
   \ (bucket-owner-full-control)
acl> 1

Option storage_class.
The storage class to use when storing new objects in OSS.
Choose a number from below, or type in your own value.
Press Enter to leave empty.
 1 / Default
   \ ()
 2 / Standard storage class
   \ (STANDARD)
 3 / Archive storage mode
   \ (GLACIER)
 4 / Infrequent access storage mode
   \ (STANDARD_IA)
storage_class> 2

Edit advanced config?
y) Yes
n) No (default)
y/n> n

Configuration complete.
Options:
- type: s3
- provider: Alibaba
- access_key_id: xxxx
- secret_access_key: xxxx
- endpoint: oss-cn-chengdu.aliyuncs.com
- acl: private
- storage_class: STANDARD
Keep this "oss" remote?
y) Yes this is OK (default)
e) Edit this remote
d) Delete this remote
y/e/d> y

Current remotes:

Name                 Type
====                 ====
oss                  s3

e) Edit existing remote
n) New remote
d) Delete remote
r) Rename remote
c) Copy remote
s) Set configuration password
q) Quit config
e/n/d/r/c/s/q> q
```

## 配置S4

S4也是支持S3协议的对象存储，配置方法与阿里云对象存储大致相同，这里不再赘述。

其中`key`和`secret`可以在 <https://console.bitiful.com/accessKey> 处设置。

- 注意，此处用户权限不仅要给`读`,`写`,还要给`列表`。

![](https://img.tucang.cc/api/image/show/d2ecf1a42b483f00109a8f911ceb0931)

```bash
❯ rclone config   
Current remotes:

Name                 Type
====                 ====
oss                  s3

e) Edit existing remote
n) New remote
d) Delete remote
r) Rename remote
c) Copy remote
s) Set configuration password
q) Quit config
e/n/d/r/c/s/q> n

Enter name for new remote.
name> s4

Option Storage.
Type of storage to configure.
Choose a number from below, or type in your own value.
 1 / 1Fichier
   \ (fichier)
 2 / Akamai NetStorage
   \ (netstorage)
 3 / Alias for an existing remote
   \ (alias)
 4 / Amazon S3 Compliant Storage Providers including AWS, Alibaba, ArvanCloud, Ceph, ChinaMobile, Cloudflare, DigitalOcean, Dreamhost, GCS, HuaweiOBS, IBMCOS, IDrive, IONOS, LyveCloud, Leviia, Liara, Linode, Minio, Netease, Petabox, RackCorp, Rclone, Scaleway, SeaweedFS, StackPath, Storj, Synology, TencentCOS, Wasabi, Qiniu and others
   \ (s3)
 5 / Backblaze B2
   \ (b2)
 6 / Better checksums for other remotes
   \ (hasher)
 7 / Box
   \ (box)
 8 / Cache a remote
   \ (cache)
 9 / Citrix Sharefile
   \ (sharefile)
10 / Combine several remotes into one
   \ (combine)
11 / Compress a remote
   \ (compress)
12 / Dropbox
   \ (dropbox)
13 / Encrypt/Decrypt a remote
   \ (crypt)
14 / Enterprise File Fabric
   \ (filefabric)
15 / FTP
   \ (ftp)
16 / Google Cloud Storage (this is not Google Drive)
   \ (google cloud storage)
17 / Google Drive
   \ (drive)
18 / Google Photos
   \ (google photos)
19 / HTTP
   \ (http)
20 / Hadoop distributed file system
   \ (hdfs)
21 / HiDrive
   \ (hidrive)
22 / ImageKit.io
   \ (imagekit)
23 / In memory object storage system.
   \ (memory)
24 / Internet Archive
   \ (internetarchive)
25 / Jottacloud
   \ (jottacloud)
26 / Koofr, Digi Storage and other Koofr-compatible storage providers
   \ (koofr)
27 / Linkbox
   \ (linkbox)
28 / Local Disk
   \ (local)
29 / Mail.ru Cloud
   \ (mailru)
30 / Mega
   \ (mega)
31 / Microsoft Azure Blob Storage
   \ (azureblob)
32 / Microsoft Azure Files
   \ (azurefiles)
33 / Microsoft OneDrive
   \ (onedrive)
34 / OpenDrive
   \ (opendrive)
35 / OpenStack Swift (Rackspace Cloud Files, Blomp Cloud Storage, Memset Memstore, OVH)
   \ (swift)
36 / Oracle Cloud Infrastructure Object Storage
   \ (oracleobjectstorage)
37 / Pcloud
   \ (pcloud)
38 / PikPak
   \ (pikpak)
39 / Proton Drive
   \ (protondrive)
40 / Put.io
   \ (putio)
41 / QingCloud Object Storage
   \ (qingstor)
42 / Quatrix by Maytech
   \ (quatrix)
43 / SMB / CIFS
   \ (smb)
44 / SSH/SFTP
   \ (sftp)
45 / Sia Decentralized Cloud
   \ (sia)
46 / Storj Decentralized Cloud Storage
   \ (storj)
47 / Sugarsync
   \ (sugarsync)
48 / Transparently chunk/split large files
   \ (chunker)
49 / Union merges the contents of several upstream fs
   \ (union)
50 / Uptobox
   \ (uptobox)
51 / WebDAV
   \ (webdav)
52 / Yandex Disk
   \ (yandex)
53 / Zoho
   \ (zoho)
54 / premiumize.me
   \ (premiumizeme)
55 / seafile
   \ (seafile)
Storage> 4

Option provider.
Choose your S3 provider.
Choose a number from below, or type in your own value.
Press Enter to leave empty.
 1 / Amazon Web Services (AWS) S3
   \ (AWS)
 2 / Alibaba Cloud Object Storage System (OSS) formerly Aliyun
   \ (Alibaba)
 3 / Arvan Cloud Object Storage (AOS)
   \ (ArvanCloud)
 4 / Ceph Object Storage
   \ (Ceph)
 5 / China Mobile Ecloud Elastic Object Storage (EOS)
   \ (ChinaMobile)
 6 / Cloudflare R2 Storage
   \ (Cloudflare)
 7 / DigitalOcean Spaces
   \ (DigitalOcean)
 8 / Dreamhost DreamObjects
   \ (Dreamhost)
 9 / Google Cloud Storage
   \ (GCS)
10 / Huawei Object Storage Service
   \ (HuaweiOBS)
11 / IBM COS S3
   \ (IBMCOS)
12 / IDrive e2
   \ (IDrive)
13 / IONOS Cloud
   \ (IONOS)
14 / Seagate Lyve Cloud
   \ (LyveCloud)
15 / Leviia Object Storage
   \ (Leviia)
16 / Liara Object Storage
   \ (Liara)
17 / Linode Object Storage
   \ (Linode)
18 / Minio Object Storage
   \ (Minio)
19 / Netease Object Storage (NOS)
   \ (Netease)
20 / Petabox Object Storage
   \ (Petabox)
21 / RackCorp Object Storage
   \ (RackCorp)
22 / Rclone S3 Server
   \ (Rclone)
23 / Scaleway Object Storage
   \ (Scaleway)
24 / SeaweedFS S3
   \ (SeaweedFS)
25 / StackPath Object Storage
   \ (StackPath)
26 / Storj (S3 Compatible Gateway)
   \ (Storj)
27 / Synology C2 Object Storage
   \ (Synology)
28 / Tencent Cloud Object Storage (COS)
   \ (TencentCOS)
29 / Wasabi Object Storage
   \ (Wasabi)
30 / Qiniu Object Storage (Kodo)
   \ (Qiniu)
31 / Any other S3 compatible provider
   \ (Other)
provider> 31

Option env_auth.
Get AWS credentials from runtime (environment variables or EC2/ECS meta data if no env vars).
Only applies if access_key_id and secret_access_key is blank.
Choose a number from below, or type in your own boolean value (true or false).
Press Enter for the default (false).
 1 / Enter AWS credentials in the next step.
   \ (false)
 2 / Get AWS credentials from the environment (env vars or IAM).
   \ (true)
env_auth> 1

Option access_key_id.
AWS Access Key ID.
Leave blank for anonymous access or runtime credentials.
Enter a value. Press Enter to leave empty.
access_key_id> xxxx

Option secret_access_key.
AWS Secret Access Key (password).
Leave blank for anonymous access or runtime credentials.
Enter a value. Press Enter to leave empty.
secret_access_key> xxxx

Option region.
Region to connect to.
Leave blank if you are using an S3 clone and you don't have a region.
Choose a number from below, or type in your own value.
Press Enter to leave empty.
   / Use this if unsure.
 1 | Will use v4 signatures and an empty region.
   \ ()
   / Use this only if v4 signatures don't work.
 2 | E.g. pre Jewel/v10 CEPH.
   \ (other-v2-signature)
region> 1

Option endpoint.
Endpoint for S3 API.
Required when using an S3 clone.
Enter a value. Press Enter to leave empty.
endpoint> https://s3.bitiful.net

Option location_constraint.
Location constraint - must be set to match the Region.
Leave blank if not sure. Used when creating buckets only.
Enter a value. Press Enter to leave empty.
location_constraint> 

Option acl.
Canned ACL used when creating buckets and storing or copying objects.
This ACL is used for creating objects and if bucket_acl isn't set, for creating buckets too.
For more info visit https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#canned-acl
Note that this ACL is applied when server-side copying objects as S3
doesn't copy the ACL from the source but rather writes a fresh one.
If the acl is an empty string then no X-Amz-Acl: header is added and
the default (private) will be used.
Choose a number from below, or type in your own value.
Press Enter to leave empty.
   / Owner gets FULL_CONTROL.
 1 | No one else has access rights (default).
   \ (private)
   / Owner gets FULL_CONTROL.
 2 | The AllUsers group gets READ access.
   \ (public-read)
   / Owner gets FULL_CONTROL.
 3 | The AllUsers group gets READ and WRITE access.
   | Granting this on a bucket is generally not recommended.
   \ (public-read-write)
   / Owner gets FULL_CONTROL.
 4 | The AuthenticatedUsers group gets READ access.
   \ (authenticated-read)
   / Object owner gets FULL_CONTROL.
 5 | Bucket owner gets READ access.
   | If you specify this canned ACL when creating a bucket, Amazon S3 ignores it.
   \ (bucket-owner-read)
   / Both the object owner and the bucket owner get FULL_CONTROL over the object.
 6 | If you specify this canned ACL when creating a bucket, Amazon S3 ignores it.
   \ (bucket-owner-full-control)
acl> 1

Edit advanced config?
y) Yes
n) No (default)
y/n> n

Configuration complete.
Options:
- type: s3
- provider: Other
- access_key_id: xxx
- secret_access_key: xxx
- endpoint: https://s3.bitiful.net
- acl: private
Keep this "s4" remote?
y) Yes this is OK (default)
e) Edit this remote
d) Delete this remote
y/e/d> y

Current remotes:

Name                 Type
====                 ====
oss                  s3
s4                   s3

e) Edit existing remote
n) New remote
d) Delete remote
r) Rename remote
c) Copy remote
s) Set configuration password
q) Quit config
e/n/d/r/c/s/q> q
```

## 最终结果

```bash
❯ rclone config   
Current remotes:

Name                 Type
====                 ====
oss                  s3
s4                   s3

e) Edit existing remote
n) New remote
d) Delete remote
r) Rename remote
c) Copy remote
s) Set configuration password
q) Quit config
e/n/d/r/c/s/q> 
```

## 迁移数据

- 在迁移前，确定oss中已经删除了不需要备份的数据。

```bash
# rclone sync oss:laic-cdn s4:laic-cdn --progress
# rclone sync 源（配置文件名称）: 源数据Bucket  目标源名称：目标bucket

❯ rclone sync oss:laic-cdn s4:laic-cdn --progress
2024/06/09 23:54:53 ERROR : public/upload/: Entry doesn't belong in directory "public/upload" (same as directory) - ignoring
2024/06/09 23:54:53 ERROR : public/upload/: Entry doesn't belong in directory "public/upload" (same as directory) - ignoring
Transferred:   	  146.137 MiB / 146.137 MiB, 100%, 93.290 KiB/s, ETA 0s
Transferred:         8635 / 8635, 100%
Elapsed time:      6m33.3s
```

同步时间长达6分半的主要原因就是忘了删除oss中的log文件。
