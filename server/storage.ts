import { users, domainGenerations, type User, type InsertUser, type DomainGeneration, type InsertDomainGeneration } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createDomainGeneration(generation: InsertDomainGeneration): Promise<DomainGeneration>;
  getDomainGenerations(): Promise<DomainGeneration[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private domainGenerations: Map<number, DomainGeneration>;
  private currentUserId: number;
  private currentGenerationId: number;

  constructor() {
    this.users = new Map();
    this.domainGenerations = new Map();
    this.currentUserId = 1;
    this.currentGenerationId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createDomainGeneration(insertGeneration: InsertDomainGeneration): Promise<DomainGeneration> {
    const id = this.currentGenerationId++;
    const generation: DomainGeneration = { 
      ...insertGeneration, 
      id,
      createdAt: new Date()
    };
    this.domainGenerations.set(id, generation);
    return generation;
  }

  async getDomainGenerations(): Promise<DomainGeneration[]> {
    return Array.from(this.domainGenerations.values());
  }
}

export const storage = new MemStorage();
