﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using postAPI.Models;

namespace Blog.Migrations
{
    [DbContext(typeof(PostContext))]
    [Migration("20200615130601_liketopost")]
    partial class liketopost
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.4")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Blog.Models.Comment", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("PostId")
                        .HasColumnType("int");

                    b.Property<string>("content")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("id");

                    b.HasIndex("PostId");

                    b.ToTable("Comments");
                });

            modelBuilder.Entity("Blog.Models.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("email")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("firsName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("lastName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("nickName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<byte[]>("passwordHash")
                        .HasColumnType("varbinary(max)");

                    b.Property<byte[]>("passwordSalt")
                        .HasColumnType("varbinary(max)");

                    b.HasKey("Id");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("Blog.Models.likes", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("PostId")
                        .HasColumnType("int");

                    b.Property<int>("like")
                        .HasColumnType("int");

                    b.Property<int>("love")
                        .HasColumnType("int");

                    b.HasKey("id");

                    b.HasIndex("PostId");

                    b.ToTable("like");
                });

            modelBuilder.Entity("postAPI.Models.Post", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("PostContent")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("likes")
                        .HasColumnType("int");

                    b.Property<bool>("pressedLK")
                        .HasColumnType("bit");

                    b.Property<bool>("pressedSD")
                        .HasColumnType("bit");

                    b.Property<int>("saved")
                        .HasColumnType("int");

                    b.Property<string>("userNickname")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Posts");
                });

            modelBuilder.Entity("Blog.Models.Comment", b =>
                {
                    b.HasOne("postAPI.Models.Post", "Post")
                        .WithMany("comments")
                        .HasForeignKey("PostId");
                });

            modelBuilder.Entity("Blog.Models.likes", b =>
                {
                    b.HasOne("postAPI.Models.Post", "Post")
                        .WithMany("like")
                        .HasForeignKey("PostId");
                });
#pragma warning restore 612, 618
        }
    }
}
