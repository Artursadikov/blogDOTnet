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
    [Migration("20200618143719_LikeChenge")]
    partial class LikeChenge
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.5")
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

            modelBuilder.Entity("Blog.Models.Like", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("PostId")
                        .HasColumnType("int");

                    b.Property<int>("like")
                        .HasColumnType("int");

                    b.Property<int>("liked")
                        .HasColumnType("int");

                    b.Property<int>("love")
                        .HasColumnType("int");

                    b.Property<int>("loved")
                        .HasColumnType("int");

                    b.HasKey("id");

                    b.HasIndex("PostId");

                    b.ToTable("likes");
                });

            modelBuilder.Entity("postAPI.Models.Post", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("PostContent")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("date")
                        .HasColumnType("datetime2");

                    b.Property<string>("header")
                        .HasColumnType("nvarchar(max)");

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

            modelBuilder.Entity("Blog.Models.Like", b =>
                {
                    b.HasOne("postAPI.Models.Post", "Post")
                        .WithMany("like")
                        .HasForeignKey("PostId");
                });
#pragma warning restore 612, 618
        }
    }
}
